import IMovie from '../types/Movie';
import { useEffect, useState } from "react";
import axios, { AxiosError } from 'axios';
import http from '../http-common';
import CustomError from '../types/errorTypes/CustomError';

export function useMovies() {
    const defaultError: CustomError = { Message: "", StatusCode: 200 };
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [show, setShow] = useState(false);
    const [occuredError, setOccuredError] = useState<CustomError>(defaultError);

    async function fetchMovies() {
        const response = await http.get<IMovie[]>("/movies/GetAllMovies");
        setMovies(response.data);
    }

    async function deleteMovie(movieId: number) {
        try {
            await http.delete(`/movies/DeleteMovie/${movieId}`);
            setMovies(movies.filter(x => x.id !== movieId));
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError<CustomError>;
                if (serverError && serverError.response) {
                    setOccuredError(serverError.response.data as CustomError);
                    setShow(true);
                }
            }
        }
    }

    async function findMovieByTittle(seanseTitle: string) {
        try {
            await http.put(`/movies/GetAllMovies?SearchTerm=${seanseTitle}`);
            setMovies(movies.filter(x => x.title !== seanseTitle));
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError<CustomError>;
                if (serverError && serverError.response) {
                    setOccuredError(serverError.response.data as CustomError);
                    setShow(true);
                }
            }
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return { movies, show, deleteMovie, findMovieByTittle, setShow, occuredError }
}
