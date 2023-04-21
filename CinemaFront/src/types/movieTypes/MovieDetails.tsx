export default interface MovieDetails {
        id: number;
        description: string;
        producers: string;
        age_Limit: number;  
        independentRate: number;
        usersRate: number,
        country: string;
        movieTrailerUrl: string;
        start_date: string;
        end_date: string;
}

export const defaultMovieDetails: MovieDetails = {
        id: 0,
        description: '',
        producers: '',
        age_Limit: 0,
        independentRate: 0,
        usersRate: 0,
        country: '',
        movieTrailerUrl: '',
        start_date: '',
        end_date: ''
}