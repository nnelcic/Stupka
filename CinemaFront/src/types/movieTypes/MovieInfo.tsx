
import MovieDetails from "./MovieDetails";
import MovieGenre from "./movieGenre";

export default interface MovieInfo {
    id: number;
    originalTitle: string;
    title: string;
    duration: number;
    movieTypeId: number;  
    releaseDate: string; 
    posterUrl: string;
    movieDetails: MovieDetails;
    movieGerne: MovieGenre 
}

export const defaultMovieInfo: MovieInfo = {
    id: 0,
    originalTitle: '',
    title: '',
    duration: 0,  
    movieTypeId: 0,
    releaseDate: '',  
    posterUrl: '',  
    movieDetails: {
        id: 0,
        description: '',
        producers: '',
        age_Limit: 0,    
        independentRate: 0,
        country: '',
        movieTrailerUrl: '',
        start_date: '',
        end_date: '',
    },
    movieGerne: {
        movieId: 0,
        genreId: 0,
    } 
}