import MovieInfo from "../../../types/movieTypes/MovieInfo";
import MovieDetails from "../../../types/movieTypes/MovieDetails";
import { Card, Container, Row } from "react-bootstrap";

interface GetMovieInfoProps {
    
    movie: MovieInfo; 
    movieDetails: MovieDetails;  
    getMovie: (movieId: number) => void;
}

const GetMovieInfo: React.FC<GetMovieInfoProps> = ({ movie, movieDetails}) => {

    return (
        <>
            <Container>
                <Row>               
                   
                 <img src={movie.posterUrl}></img>
                    <Card style={{ width: '17rem'}}>                
                        <Card.Img variant="top" src={movie.posterUrl} />                              
                    </Card>  
                                
                    <Card style={{ width: '28rem' }}>               
                    <Card.Title>{movie.title}</Card.Title>  
                    <Card.Body>
                            <Card.Text>{movieDetails.description}</Card.Text>                                                  
                        </Card.Body>
                        <Card.Footer>
                            <Card.Text>Країна: {movieDetails.country}</Card.Text> 
                            <Card.Text>Продюсер: {movieDetails.producer}</Card.Text> 
                            <Card.Text>Вікові обмеження: {movieDetails.age_Limit}</Card.Text>
                            <Card.Text>Рейтинг: {movieDetails.independent_rate}</Card.Text>                                                   
                        </Card.Footer>
                    </Card>
                </Row>
            </Container>
        </>
    )
}

export default GetMovieInfo;