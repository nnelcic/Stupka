import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import MovieInfo from "../../../types/movieTypes/MovieInfo";
import MovieDetails from "../../../types/movieTypes/MovieDetails";
import MovieGenre from "../../../types/movieTypes/movieGenre";
import useMovie from "../../../hooks/MovieHook";
import CustomError from "../../../types/errorTypes/CustomError";

type UpdateMovieFormProps = {
    close: () => void;
    movie: MovieInfo;
    movieDetails: MovieDetails;
    movieGenre: MovieGenre;
    setRerender: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    setShowError: (value: boolean) => void;
    setOccuredError: (value: CustomError) => void;
};

const UpdateMovie: React.FC<UpdateMovieFormProps> = ({ setOccuredError, setShowError, close, movie, movieDetails, movieGenre, setRerender }) => {
    const [originalTitle, setOriginalTitle] = useState(movie.originalTitle);
    const [title, setTitle] = useState(movie.title);
    const [duration, setDuration] = useState(movie.duration);
    const [type, setType] = useState(movie.movieTypeId);
    const [releaseDate, setReleaseDate] = useState(movie.releaseDate);
    const [posterUrl, setPosterUrl] = useState(movie.posterUrl);
    const [description, setDescription] = useState(movieDetails.description);
    const [ageLimit, setAgeLimit] = useState(movieDetails.age_Limit);
    const [country, setCountry] = useState(movieDetails.country);
    const [rate, setRate] = useState(movieDetails.independent_rate);
    const [producer, setProducer] = useState(movieDetails.producer);
    const [trailer, setTrailer] = useState(movieDetails.movieTrailerUrl);
    const [genreId, setGenreId] = useState(movieGenre.genreId);
    const [movieId, setMovieId] = useState(movie.id);
    const [startDate, setStartDate] = useState(movieDetails.start_date);
    const [endDate, setEndDate] = useState(movieDetails.end_date);
    const [error, setError] = useState("");
    const { updateMovie } = useMovie();


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            updateMovie(movieId, originalTitle, title, duration, type, releaseDate, posterUrl, description,
                producer, ageLimit, rate, country, trailer, 
                genreId, movieId, startDate, endDate, setShowError, setOccuredError)
            close();
            setTimeout(() => {
                setRerender(x => !x)
            }, 1000);
        } catch {
            setError("Invalid input");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Container>
                <Row>
                <Col>
                        <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Оригінальна назва </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введіть оригінальну назву"
                            value={originalTitle}
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
                            value={title}
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
                        placeholder="Введіть тривалість фільму"
                        value={duration}
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
                                value={type}
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
                        value={releaseDate}
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
                        value={posterUrl}
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
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        />
                        </Form.Group></Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Вікові обмеження</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Введіть вік"
                        value={ageLimit}
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
                        <Form.Label>Продюсер</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Введіть продюсера"
                        value={producer}
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
                        value={country}
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
                        value={movieDetails.movieTrailerUrl}
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
                        value={genreId}
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
                        value={movieId}
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
                        value={startDate}
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
                        value={endDate}
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
                            value={rate}
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
        </Form>
    );
};

export default UpdateMovie;
