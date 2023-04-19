export default interface MovieDetails {
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

export const defaultMovieDetails: MovieDetails = {
        id: 0,
        description: '',
        producer: '',
        age_Limit: 0,
        independent_rate: 0,
        country: '',
        movieTrailerUrl: '',
        start_date: '',
        end_date: ''
}