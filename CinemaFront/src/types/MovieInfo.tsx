export default interface MovieInfo {
    id: number;
    originalTitle: string;
    title: string;
    duration: number;
    movieTypeId: number;  
    releaseDate: string; 
    posterUrl: string;
    movieDetails: {
        id: number;
        description: string;
        producer: string;
        age_Limit: number;  
        independent_rate: number;
        country: string;
        movieTrailerUrl: string;
        start_date: string;
        end_date: string;
    }
    movieGerne: {
        movieId: number,
        genreId: number
    } 

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
        producer: '',
        age_Limit: 0,    
        independent_rate: 0,
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