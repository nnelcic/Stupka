import { Container, Table, Button, Row, Col } from "react-bootstrap";
import MoviesRow from "../../components/Admin/movies/MoviesRow";
import CreateMovie from "../../components/Admin/movies/CreateMovie";
import DeleteMovie from "../../components/Admin/movies/DeleteMovie";
import UpdateMovie from "../../components/Admin/movies/UpdateMovie";
import GetMovieInfo from "../../components/Admin/movies/GetMovieInfo";
import AlertDismissible from "../../components/shared/AlertDismissible";
import ModalWindow from "../../components/shared/ModalWindow";
import useMovie from "../../hooks/MovieHook";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import MovieInfo, {defaultMovieInfo} from "../../types/MovieInfo";
import CustomError, { defaultError } from "../../types/errorTypes/CustomError";
import MovieDetails, {defaultMovieDetails} from "../../types/MovieDetails";
import MovieGenre, {defaultGenre} from "../../types/movieGenre";
import MovieItem from "../../components/Admin/movies/MovieItem";
import PublishMovieItem from "../../components/Admin/movies/PublishMovieItem";

interface MoviesProps {
    setShowMovie: (flag: boolean) => void;  
}

const Movie: React.FC<MoviesProps> = ({ setShowMovie }) => {
    const { modal, open, close } = useContext(ModalContext);
    const [currentOption, setCurrentOption] = useState<string>('');
    const [size, setSize] = useState<string>('');
    const [currentMovieId, setCurrentMovieId] = useState<number>();
    const [getTitle, setGetTitle] = useState("");
    const [movie, setMovie] = useState<MovieInfo>(defaultMovieInfo);  
    const [info, setInfo] = useState<MovieDetails>(defaultMovieDetails); 
    const [genre, setGenre] = useState<MovieGenre>(defaultGenre);      
    const [showError, setShowError] = useState(false);
    const [occuredError, setOccuredError] = useState<CustomError>(defaultError);
    const [rerender, setRerender] = useState(false);
    const { movies, fetchMovies, getMovie } = useMovie();

    useEffect(() => {
        fetchMovies();
    }, []);

   
    return ( 
        
        <Container fluid className="p-5 pt-2 text-center">   
           
            {showError && <AlertDismissible func={setShowError} error={occuredError}/>}
            
            {modal && <ModalWindow title="Заповніть форму" 
                close={close}
                modal={modal}
                size={size}>
                {
                    currentOption === 'showMovie' 
                    ? <GetMovieInfo  getMovie={getMovie} movie={movie} movieDetails={info} />
                    : currentOption === 'publishMovie' 
                    ? <PublishMovieItem movieItem={movie} getMovie={getMovie} close={close} movieId={movie.id}/>
                    : currentOption ===  'updateMovie' 
                    ? <UpdateMovie setShowError={setShowError} setOccuredError={setOccuredError} 
                    close={close} movie={movie} setRerender={setRerender} movieDetails={info} movieGenre={genre}/> 
                    : currentOption ===  'createMovie'
                    ? <CreateMovie setShowError={setShowError} setOccuredError={setOccuredError}
                    close={close} movie={movie} setRerender={setRerender} /> 
                    : <DeleteMovie setShowError={setShowError} setOccuredError={setOccuredError}
                    close={close} movieId={movie.id} setRerender={setRerender} />}
            </ModalWindow>}

            <Button variant="outline-danger" size="lg" onClick={() => {
                setCurrentOption('createMovie');
                setMovie(movie);
                setShowMovie(true);
                open();
                setSize('lg');
            }}>Створити новий фільм</Button>
              
            
        <Table striped bordered hover className="mt-2" variant="dark" responsive>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Оригінальна назва</th>
                    <th>Назва</th>
                    <th>Дата реліза</th>
                    <th>Тривалість</th>                    
                    <th>Опції</th>
                </tr>
            </thead>
            <tbody>
                {movies.map(x => 
                <MoviesRow 
                    setMovie={setMovie}                  
                    setShowMovie={setShowMovie}                   
                    movie={x}                                
                    key={x.posterUrl} 
                    open={open}
                    modal={modal}
                    setCurrentMovieId={setCurrentMovieId}
                    setCurrentOption={setCurrentOption}
                    setSize={setSize}
                />               
                
                )}
            </tbody>
        </Table>
        </Container>
    )
};

export default Movie;