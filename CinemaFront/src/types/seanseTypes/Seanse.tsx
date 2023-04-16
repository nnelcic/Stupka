import Movie from "../movieTypes/Movie";
import Price from "../priceTypes/Price";

export default interface Seanse {
    id: number;
    hallId: number;
    startTime: string;
    movie:    {
        id: number,
        originalTitle: string,
        title: string,
        duration: number, 
        releaseDate: string,  
        posterUrl: string, 
    }
    price: {
        id: number;
        cost: number;
    }
}

export const defaultSeanse: Seanse = {
    id: 0,
    hallId: 0,
    startTime: '',
    movie: {
        id: 0,
        duration: 0,
        originalTitle: '',
        posterUrl: '',
        releaseDate: '',
        title: '',
    },
    price: {
        id: 0,
        cost: 0
    }
}