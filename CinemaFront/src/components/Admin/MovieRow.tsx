import { Button, Col, Container, Row } from "react-bootstrap";
import IMovie from "../../types/Movie";

interface MovieRowProps {
    movie: IMovie;
    deleteMovie: (id: number) => void;
}

const MovieRow: React.FC<MovieRowProps> = ({ movie, deleteMovie }) => {

    return (
        <tr>
            <td>{movie.id}</td>
            <td>{movie.originalTitle}</td>
            <td>{movie.title}</td>
            <td>{movie.duration}</td>
            <td>{movie.releaseDate}</td>            
            <td>
                <Container>
                    <Row>
                        <Col>
                            <Button variant="light">Деталі</Button>
                        </Col>
                        <Col>
                            <Button variant="warning">Редагувати</Button>
                        </Col>
                        <Col>
                            <Button variant="danger"
                                onClick={() => deleteMovie(movie.id)}>
                                Видалити
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </td>
        </tr>
    );
};

export default MovieRow;
