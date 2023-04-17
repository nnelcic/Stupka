import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import MovieInfo, {defaultMovieInfo} from "../../../types/MovieInfo";
import useMovie from "../../../hooks/MovieHook";
import { Button, Col, Container, Form, Row } from "react-bootstrap";


interface PublishMovieItemEvent {
    close: () => void;
    movieItem: MovieInfo;   
    movieId: number; 
    getMovie: (id: number) => void;
}

const PublishMovieItem: React.FC<PublishMovieItemEvent> =({close, movieItem, movieId}) => {
    const [originalTitle, setOriginalTitle] = useState(movieItem.originalTitle);
    const [title, setTitle] = useState(movieItem.title);
    const [posterUrl, setPosterUrl] = useState(movieItem.posterUrl);
    const { getMovie } = useMovie();

    useEffect(() => {
        getMovie(movieId);
    }, []);


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        getMovie(movieId);
        close();
    };

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Оригінальна назва </Form.Label>
            <Form.Control
                type="text"
                placeholder="Введіть оригінальну назву"
                value={originalTitle}
                onChange={(event) => setOriginalTitle(event.target.value)}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Назва</Form.Label>
            <Form.Control
                type="text"
                placeholder="Введіть назву"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label>Постер Url</Form.Label>
            <Form.Control
                type="text"
                placeholder="Введіть Url постеру"
                value={posterUrl}
                onChange={(event) => setPosterUrl(event.target.value)}
            />
        </Form.Group>
        <Container>
            <Row>
                <Col>
                    <div className="d-grid gap-1">
                        <Button variant="outline-dark" type="submit">
                            Публікація в афіші
                        </Button>
                    </div>
                </Col>

                <Col>
                    <div className="d-grid gap-1">
                        <Button variant="outline-dark" type="submit">
                            Скоро у прокаті
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
      
     </Form>
    )
}

export default PublishMovieItem;