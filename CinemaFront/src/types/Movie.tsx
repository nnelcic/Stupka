import MovieType from "./movieTypes/MovieType";

export default interface Movie {
    id: number,
    originalTitle: string,
    title: string,
    duration: number,  
    movieTypeId: MovieType
    releaseDate: string,  
    posterUrl: string,  
}