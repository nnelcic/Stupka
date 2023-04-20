import { Col, Card, Row, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import MovieInfo from "../../types/movieTypes/MovieInfo";
import { Link } from "react-router-dom";

interface MoviePosterItemProps {
    movie: MovieInfo;
    setShowMovies: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    setShowMovie: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    setMovie: (value: MovieInfo) => void;
}

const MoviePosterItem: React.FC<MoviePosterItemProps> = ({ movie, setShowMovies, setShowMovie, setMovie}) => {
    return (
        <Card style={{ width: '10rem' }} className="p-1 m-1 bg-black">
            <Card.Img variant="top" src={movie.posterUrl} />
            <Card.Body>
                                
            </Card.Body>
            <Card.Footer>
            <Button variant="outline-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
            </Button>
            </Card.Footer>
            </Card>
    )
}

export default MoviePosterItem;