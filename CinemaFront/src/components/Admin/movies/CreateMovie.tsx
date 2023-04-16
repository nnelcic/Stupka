import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import useMovie from "../../../hooks/MovieHook";
import CustomError from "../../../types/errorTypes/CustomError";
import MovieInfo from "../../../types/MovieInfo";

type CreateMovieFormProps = {
    close: () => void;
    movie: MovieInfo;
    setRerender: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    setShowError: (value: boolean) => void;
    setOccuredError: (value: CustomError) => void;
};

const CreateMovie: React.FC<CreateMovieFormProps> = ({ setOccuredError, setShowError, close, movie, setRerender }) => {
    const [originalTitle, setOriginalTitle] = useState('');
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState(0);
    const [type, setType] = useState(0);
    const [releaseDate, setReleaseDate] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [description, setDescription] = useState('');
    const [ageLimit, setAgeLimit] = useState(0);
    const [country, setCountry] = useState('');
    const [rate, setRate] = useState(0);
    const [producer, setProducer] = useState('');
    const [trailer, setTrailer] = useState('');
    const [genreId, setGenreId] = useState(0);
    const [movieId, setMovieId] = useState(0);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [error, setError] = useState("");
    const { createMovie } = useMovie();
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            createMovie(originalTitle, title, duration, type, releaseDate, posterUrl, description,
                        producer, ageLimit, rate, country, trailer, 
                        genreId, movieId, startDate, endDate, setShowError, setOccuredError);
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

            <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label>Тривалість</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Введіть тривалість фільму"
                    value={duration}
                    onChange={(event: any) => setDuration(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Тип</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Введіть тип фільму"
                    value={type}
                    onChange={(event: any) => setType(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Дата релізу</Form.Label>
                <Form.Control
                    type="date"
                    placeholder="Введіть дату релізу"
                    value={releaseDate}
                    onChange={(event) => setReleaseDate(event.target.value)}
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

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Опис</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введіть опис"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Вікові обмеження</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Введіть вік"
                    value={ageLimit}
                    onChange={(event: any) => setAgeLimit(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Продюсер</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введіть продюсера"
                    value={producer}
                    onChange={(event) => setProducer(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Країна походження</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введіть країну"
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Url трейлера</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введіть Url трейлера"
                    value={trailer}
                    onChange={(event) => setTrailer(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Id жанру</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Введіть Id жанра"
                    value={genreId}
                    onChange={(event: any) => setGenreId(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Id фільму</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Введіть Id фільму"
                    value={movieId}
                    onChange={(event: any) => setMovieId(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Дата початку</Form.Label>
                <Form.Control
                    type="date"
                    placeholder="Введіть дату початку"
                    value={startDate}
                    onChange={(event) => setStartDate(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Дата закінчення</Form.Label>
                <Form.Control
                    type="date"
                    placeholder="Введіть дату закінчення"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Незалежний рейтинг</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Введіть рейтинг"
                    value={rate}
                    onChange={(event: any) => setRate(event.target.value)}
                />
            </Form.Group>

            {error && <Alert variant="danger">{error}</Alert>}

            <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                    Створити
                </Button>
            </div>
        </Form>
    );
};

export default CreateMovie;