import { useEffect, useState } from "react";
import axios from "axios";
import Favourite from "../../../types/favouriteTypes/Favourite";
import MovieItem from "../movies/MovieItem";
import { Col, Row } from "react-bootstrap";
import Movie from "../../../types/movieTypes/Movie";

interface FavouriteItemProps { 
    favourite: Favourite;
}

const FavouriteItem: React.FC<FavouriteItemProps> = ({favourite}) => {
    
    const defaultMovie: Movie = {
        id: 0,
        duration: 0,
        originalTitle: '',
        posterUrl: '',
        releaseDate: new Date(),
        title: '',
    }
    
    const [movie, setMovie] = useState<Movie>(defaultMovie);

    async function fetchMovie(movieDetailsId: number) {
        const response = await axios
            .get<Movie>(`https://localhost:7282/api/movies/GetMovieByMovieDetailsId/${movieDetailsId}`);
        setMovie(response.data);
    }

    useEffect(() => {
        fetchMovie(favourite.movieId);
    }, []);
    
    return (
        <Row className="mb-5">
            <Col>
                <MovieItem posterUrl={movie.posterUrl} title={movie.title} originalTitle={movie.originalTitle} />
            </Col>
        </Row>
    );
};

export default FavouriteItem;