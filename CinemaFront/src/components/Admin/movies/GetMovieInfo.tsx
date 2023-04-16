import { useEffect } from "react";
import MovieDetails from "../../../types/MovieDetails";
import MovieInfo from "../../../types/MovieInfo";
import { Card, Container, Row } from "react-bootstrap";

interface GetMovieInfoProps {
    movieId: number; 
    movie: MovieInfo;
    info: MovieDetails;
    getMovie: (id: number) => void;
}

const GetMovieInfo: React.FC<GetMovieInfoProps> = ({movieId, getMovie, movie, info}) => {
    
    useEffect(() => {
        getMovie(movieId);
    }, []);

    return (
        <>
            <Container>
                <Row>               
                        <Card style={{ width: '17rem'}}>                
                            <Card.Img variant="top" src={movie.posterUrl} />                              
                        </Card>  
                                  
                             
                        <Card style={{ width: '28rem' }}>               
                        <Card.Title>{movie.title}</Card.Title>  
                        <Card.Body>
                                <Card.Text>{info.description}</Card.Text>                                                  
                            </Card.Body>
                            <Card.Footer>
                                <Card.Text>Країна: {info.country}</Card.Text> 
                                <Card.Text>Продюсер: {info.producer}</Card.Text> 
                                <Card.Text>Вікові обмеження: {info.age_Limit}</Card.Text>
                                <Card.Text>Рейтинг: {info.independent_rate}</Card.Text>                                                   
                            </Card.Footer>
                        </Card>      
                         
           
                </Row>
            </Container>
        </>
    )
}

export default GetMovieInfo;