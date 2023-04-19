import { Button, Col, Container, Row } from "react-bootstrap";
import MovieInfo from "../../../types/movieTypes/MovieInfo";
import MovieDetails from "../../../types/movieTypes/MovieDetails";


interface MoviesRowProps {
    movie: MovieInfo;   
    modal: boolean;
    open: () => void;
    setCurrentMovieId: (num: number) => void;
    setCurrentOption: (option: string) => void;
    setSize: (size: string) => void;    
    setShowMovie: (flag: boolean) => void;   
    setMovie: (movie: MovieInfo) => void;
}

const MoviesRow: React.FC<MoviesRowProps> = ({ setMovie, setShowMovie, movie, open, setCurrentMovieId, setCurrentOption, setSize }) => {
    return (
        <tr>
            <td>{movie.id}</td>
            <td>{movie.originalTitle}</td>
            <td>{movie.title}</td>
            <td>{movie.releaseDate}</td>
            <td>{movie.duration}</td>            
            <td>
                <Container>
                    <Row> 
                                               
                         <Col>
                            <Button variant="outline-danger" className="text-white" onClick={() => {
                                setCurrentMovieId(movie.id); 
                                setMovie(movie);
                                open();                               
                                setCurrentOption('showMovie');
                                setSize('lg');
                            }}>
                                Інформаціѝ
                            </Button>
                        </Col>     
                        <Col>
                        <Button variant="outline-danger" className="text-white" onClick={() => {
                            setCurrentMovieId(movie.id);
                            setMovie(movie);
                            open();                               
                            setCurrentOption('updateMovie');
                            setShowMovie(true);
                            setSize('lg');
                            }}>Редагувати
                        </Button>
                        </Col>
                        <Col>
                         <Button variant="outline-danger" className="text-white" onClick={() => {
                            setCurrentMovieId(movie.id);
                            open();
                            setCurrentOption('deleteMovie');
                            setSize('sm');
                            }}>
                            Видалити
                          </Button>
                        </Col>
                    </Row>
                </Container>
            </td>
        </tr>
    );
};

export default MoviesRow;