
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
        ageLimit: 0,    
        independentRate: 0,
        usersRate: 0,
        country: '',
        movieTrailerUrl: '',
        startDate: '',
        endDate: '',
    },
    movieGerne: {
        movieId: 0,
        genreId: 0,
    } 
}