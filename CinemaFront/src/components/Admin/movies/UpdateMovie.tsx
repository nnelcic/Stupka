import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import MovieInfo from "../../../types/movieTypes/MovieInfo";
import MovieGenre from "../../../types/movieTypes/movieGenre";
import useMovie from "../../../hooks/MovieHook";
import CustomError from "../../../types/errorTypes/CustomError";

type UpdateMovieFormProps = {
    close: () => void;
    movie: MovieInfo;
    movieGenre: MovieGenre;
    setRerender: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    setShowError: (value: boolean) => void;
    setOccuredError: (value: CustomError) => void;
    getMovie: (movieId: number) => void;
};


const UpdateMovie: React.FC<UpdateMovieFormProps> = ({ getMovie, setOccuredError, setShowError, close, movie, movieGenre, setRerender }) => {
    
    const [originalTitle, setOriginalTitle] = useState('');
    const [title, setTitle] = useState(movie.title);
    const [duration, setDuration] = useState(0);
    const [movieTypeId, setType] = useState(0);
    const [releaseDate, setReleaseDate] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [description, setDescription] = useState('');
    const [ageLimit, setAgeLimit] = useState(0);
    const [country, setCountry] = useState('');
    const [independentRate, setRate] = useState(0);
    const [producers, setProducer] = useState(movie.movieDetails.producers);
    const [movieTrailerUrl, setTrailer] = useState('');
    const [genreId, setGenreId] = useState(0);
    const [movieId, setMovieId] = useState(0);
    const [start_date, setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');

    const [error, setError] = useState("");
    const { updateMovie } = useMovie();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            updateMovie(movieId, originalTitle, title, duration, movieTypeId, releaseDate, posterUrl, description,
                producers, ageLimit, independentRate, country, movieTrailerUrl, 
                genreId, movieId, start_date, end_date, setShowError, setOccuredError)
            close();
            setTimeout(() => {
                setRerender(x => !x)
            }, 1000);
        } catch {
            setError("Invalid input");
        }
    };

    useEffect(() => {
        getMovie(movie.id);
    }, [])


    return (
        <div>
        {movie.movieDetails !== undefined &&
        <Form onSubmit={handleSubmit}>
            <Container>
                <Row>
                <Col>
                        <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Оригінальна назва </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введіть оригінальну назву"
                            value={movie.originalTitle}
                            onChange={(event) => setOriginalTitle(event.target.value)}
                        />
                        </Form.Group>
                </Col>

                <Col>
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Назва</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введіть назву"
                            value={movie.title}
                            onChange={(event) => setTitle(event.target.value)}
                            />
                        </Form.Group>
                 </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>Тривалість</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Введіть триваліѝть фільму"
                        value={movie.duration}
                        onChange={(event: any) => setDuration(event.target.value)}
                        />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Тип</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Введіть тип фільму"
                                value={movieTypeId}
                                onChange={(event: any) => setType(event.target.value)}
                            />
                         </Form.Group>   
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Дата релізу</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Введіть дату релізу"
                        value={movie.releaseDate}
                        onChange={(event) => setReleaseDate(event.target.value)}
                        />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Постер Url</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Введіть Url постеру"
                        value={movie.posterUrl}
                        onChange={(event) => setPosterUrl(event.target.value)}
                        />
                        </Form.Group>
                    
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Опис</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Введіть опис"
                        value={movie.movieDetails.description}
                        onChange={(event) => setDescription(event.target.value)}
                        />
                        </Form.Group></Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Вікові обмеження</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Введіть вік"
                        value={movie.movieDetails.ageLimit}
                        onChange={(event: any) => setAgeLimit(event.target.value)}
                        />
                        </Form.Group>
                     </Col>
                </Row>
            </Container>
            
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Продюѝер</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Введіть продюсера"
                        value={producers}
                        onChange={(event) => setProducer(event.target.value)}
                         />
                         </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Країна походження</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Введіть країну"
                        value={movie.movieDetails.country}
                        onChange={(event) => setCountry(event.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
            
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Url трейлера</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Введіть Url трейлера"
                        value={movieTrailerUrl}
                        onChange={(event) => setTrailer(event.target.value)}
                            />
                        </Form.Group>

                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Id жанра</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Введіть Id жанра"
                        
                        onChange={(event: any) => setGenreId(event.target.value)}
                            />
                        </Form.Group>
                    
                    </Col>
                </Row>
            </Container>
 
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Id фільму</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Введіть Id фільму"
                        
                        onChange={(event: any) => setMovieId(event.target.value)}
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Дата початку</Form.Label>
                        <Form.Control
                        type="date"
                        placeholder="Введіть дату початку"
                        value={start_date}
                        onChange={(event) => setStartDate(event.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>

            
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Дата закінчення</Form.Label>
                        <Form.Control
                        type="date"
                        placeholder="Введіть дату закінчення"
                        value={end_date}
                        onChange={(event) => setEndDate(event.target.value)}
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                            <Form.Label>Незалежний рейтинг</Form.Label>
                            <Form.Control
                            type="number"
                            placeholder="Введіть рейтинг"
                            value={independentRate}
                            onChange={(event: any) => setRate(event.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>         

  
            {error && <Alert variant="danger">{error}</Alert>}

            <div className="d-grid gap-2">
                <Button variant="outline-primary" size="lg" type="submit">
                    Редагувати
                </Button>
            </div>
        </Form>}
        </div>
    );
};

export default UpdateMovie;
