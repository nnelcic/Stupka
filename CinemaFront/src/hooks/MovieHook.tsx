import CustomError from '../types/errorTypes/CustomError';
import { useState } from "react";
import axios, { AxiosError } from 'axios';
import MovieInfo, {defaultMovieInfo} from '../types/movieTypes/MovieInfo';
import http from '../http-common';

export default function useMovie() {

    const [movies, setMovies] = useState<MovieInfo[]>([]);
    const [movie, setMovie] = useState<MovieInfo>();
    const [showMovie, setShowMovie] = useState<boolean>(true);
  

    async function fetchMovies() {
        const response = await http.get<MovieInfo[]>('/movies/GetAllMovies');
        setMovies(response.data);
    }

    async function addMovieItem(movieId: number) {
        const response = await http.get<MovieInfo>(`/movies/GetMoviesByIdAsync/${movieId}`);
        setMovie(response.data);
      }

    async function findByTitle(title: string) {
        const response = await http.get<MovieInfo[]>(`/movies/GetAllMovies?SearchTerm=${title}`);
        return response.data;
    }

    async function updateMovie(id: number, originalTitle: string, title: string, duration: number, type: number,
                                releaseDate: string, posterUrl: string, description: string, producer: string, ageLimit: number,
                                rate: number, country: string, movieTrailerUrl: string, genreId: number, movieId: number, 
                                startDate: string, endDate: string, setShowError: (value: boolean) => void, setOccuredError: (value: CustomError) => void) {
        try {
            await http.put(`/movies/UpdateMovie/${id}`, {originalTitle, title, duration, type, releaseDate, posterUrl, description,
                                producer, ageLimit, rate, country, movieTrailerUrl, genreId, movieId, startDate, endDate});
        
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError<CustomError>;
                if (serverError && serverError.response) {
                    setOccuredError(serverError.response.data as CustomError);
                    setShowError(true);
                }
            }
        }
    }

    async function createMovie(originalTitle: string, title: string, duration: number, type: number, releaseDate: string, posterUrl: string,
                                description: string, producer: string, ageLimit: number,
                                rate: number, country: string, movieTrailerUrl: string, genreId: number, movieId: number,
                                startDate: string, endDate: string, setShowError: (value: boolean) => void, setOccuredError: (value: CustomError) => void) {
        try {
            await http.post("/movies/AddMovie", {originalTitle, title, duration, type, releaseDate, posterUrl, description,
                                producer, ageLimit, rate, country, movieTrailerUrl, genreId, movieId, startDate, endDate});
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError<CustomError>;
                if (serverError && serverError.response) {
                    setOccuredError(serverError.response.data as CustomError);
                    setShowError(true);
                }
            }
        }
    }


    async function getMovie(movieId: number) {       
            const response = await http.get<MovieInfo>(`/movies/GetMovieInfo/${movieId}`);
            setMovie(response.data);       
    }  


    async function deleteMovie(movieId: number, setShowError: (value: boolean) => void, 
    setOccuredError: (value: CustomError) => void) {
        try {
            await http.delete(`/movies/DeleteMovie/${movieId}`);
            setMovies(movies.filter(x => x.id !== movieId));
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError<CustomError>;
                if (serverError && serverError.response) {
                    setOccuredError(serverError.response.data as CustomError);
                    setShowError(true);
                }
            }
        }
    }

    return { 
        movies,
        movie, 
        showMovie, 
        setShowMovie,
        addMovieItem,
        deleteMovie,
        fetchMovies,
        updateMovie,
        createMovie,
        findByTitle,
        getMovie
    };
}