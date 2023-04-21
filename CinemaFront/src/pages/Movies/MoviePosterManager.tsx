import { useEffect, useState } from "react";
import image from "../../assets/Main.png";
import useMovie from "../../hooks/MovieHook";
import MoviePosterItem from "./MoviePosterItem";
import { Col, Container, Row } from "react-bootstrap";
import MovieInfo, {defaultMovieInfo} from "../../types/movieTypes/MovieInfo";

const MoviePosterManager: React.FC<{}> = () => {
    
    const { movies } = useMovie();
    const [ showMovies, setShowMovies ] = useState(false);
    const [ showMovie, setShowMovie ] = useState(false);
    const [ movie, setMovie ] = useState<MovieInfo>(defaultMovieInfo)

    useEffect(() => {
        setShowMovies(true)
    }, []);

    return (
        <div style={{ backgroundImage: `url(${image})`}} className="min-vh-100">
                
            {showMovies &&
            <div className="px-3 posters">
               <Row>                   
                    {movies.map(item =>                 
                        <MoviePosterItem  movie={item} setMovie={setMovie} setShowMovie={setShowMovie} setShowMovies={setShowMovies} />
                        )}                 
               </Row>
            </div>}
        </div>
            );
};

export default MoviePosterManager;
