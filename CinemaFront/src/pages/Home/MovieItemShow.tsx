import { Col, Card, Row, ListGroup, ListGroupItem, Button, Container } from "react-bootstrap"
import MovieInfo from "../../types/movieTypes/MovieInfo";

interface MovieItemShowProps {
   movie: MovieInfo
    
}

const MovieItemShow: React.FC<MovieItemShowProps> = ({movie}) => {

    return (
       
            <div style={{ width: '12.6rem' }} className="movie px-0 m-5 p-0 bg-black border">           
                  
                 <img src={movie.posterUrl} width={200} height={300}/>                    
         
            </div>
       
    )

}

export default MovieItemShow;