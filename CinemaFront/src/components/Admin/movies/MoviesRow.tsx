import { Button, Col, Container, Row, Table } from "react-bootstrap";
import MovieInfo from "../../../types/movieTypes/MovieInfo";
import { useState } from "react";
import useMovie from "../../../hooks/MovieHook";


interface MoviesRowProps {
    movie: MovieInfo;   
    modal: boolean;
    open: () => void;
    setCurrentMovieId: (num: number) => void;
    setCurrentOption: (option: string) => void;
    setSize: (size: string) => void;    
    setShowMovie: (flag: boolean) => void;   
    setMovie: (movie: MovieInfo) => void;
}

const MoviesRow: React.FC<MoviesRowProps> = ({ setMovie, setShowMovie, open, movie, setCurrentMovieId, setCurrentOption, setSize }) => {
    
    const [query, setQuery] = useState("");   
    const {findByTitle, movies} = useMovie();  
    const [publish, setPublish] = useState(false);
  

   const OnChange = (event: any) => {
    event.preventDefault();
    setQuery(event.target.value);
    findByTitle(event.target.value);
  
   }  
    
    return (
        <>
        <div className="add-page">
                <div className="container">
                    <div className="add-content">
                        <div className="input-wrapper">
                            <label className="text-white p-4">
                               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg> Пошук
                            </label>
                            <input type="text" className="result"
                            value={query}
                            key={movie.id}
                            onChange={OnChange}
                            />
                        </div>                        
                  
                       {movies.length > 0 && (
                           <Container>
                             <Table bordered hover className="mt-2 border" variant="dark" responsive>                                
                                <thead>
                                    <tr>                                        
                                    <th>Id</th>
                                    <th>Оригінальна назва</th>
                                    <th>Назва</th>
                                    <th>Дата реліза</th>
                                    <th>Тривалість</th>
                                    <th>Тип</th>                                          
                                    <th>Опції</th>                  
                                        </tr>
                                        </thead>                                     
                                        <tbody>
                                                {movies.map(movie => (
                                                    <tr>
                                                        <td>{movie.id}</td>
                                                        <td>{movie.originalTitle}</td>
                                                        <td>{movie.title}</td>
                                                        <td>{new Date(movie.releaseDate).toLocaleDateString()}</td>
                                                        <td>{movie.duration}</td> 
                                                        <td>{movie.movieType}</td>                                                  
                                                        <td>
                        <Container>
                            <Row>                                
                         <Col>
                            <Button variant="outline-white" className="text-white" onClick={() => {
                                setCurrentMovieId(movie.id); 
                                setMovie(movie);
                                open();                                                          
                                setCurrentOption('showMovie');
                                setSize('lg');
                            }}>
                                {/* Інформація */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-info-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                            </Button>
                        </Col>     
                        <Col>
                        <Button variant="outline-white" className="text-white" onClick={() => {
                            setCurrentMovieId(movie.id);
                            setMovie(movie);
                            open();                               
                            setCurrentOption('updateMovie');
                            setShowMovie(true);
                            setSize('lg');
                            }}  >                         
                            {/* Редагувати */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </Button>
                        </Col>
                        <Col>
                         <Button variant="outline-red" className="text-white" onClick={() => {
                            setCurrentMovieId(movie.id);
                            open();
                            setCurrentOption('deleteMovie');
                            setSize('sm');
                            }}>
                            {/* Видалити */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                          </Button>
                        </Col>
                </Row>
        
        </Container>
                                                        </td>
                                                    </tr>                                                    
                                                ))}
                                        </tbody>                                
                            </Table>
                           </Container>
                        )}                       
                        
                    </div>
                </div>

            </div>
        </>
    );
};

export default MoviesRow;