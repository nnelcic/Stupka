import { Movie } from "../movieTypes/Movie";
import { Price } from "../priceTypes/Price";

export interface Seanse {
    id: number;
    hallId: number;
    startTime: string;
    movie: Movie;
    price: Price;
}