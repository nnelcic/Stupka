import { Container, Table } from "react-bootstrap";
import MovieRow from "../../components/Admin/MovieRow";
import AlertDismissible from "../../components/shared/AlertDismissible";
import AdminPage from "../../components/ui/AdminPage";
import { useMovies } from "../../hooks/MoviesHook";
import { AddMovie } from "../../components/forms/AddMovieForm";
import SearchTittle from "../../components/forms/searchTitle";
import "../../index.css";

const Movies: React.FC<{}> = () => {
    
    const { movies, show, deleteMovie, setShow, occuredError } = useMovies();

    return (
        <div>
            <AdminPage/>
            <AddMovie/>
            <SearchTittle/>

            {movies &&
                <Container fluid className="p-5 pt-3 text-center">
                    {show && <AlertDismissible func={setShow} error={occuredError}/>}
                    <Table striped bordered hover className="mt-2" variant="dark" responsive>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Орігінальна назва</th>
                            <th>Назва</th>
                            <th>Тривалість</th>
                            <th>Дата релізу</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map(x => 
                            <MovieRow 
                                movie={x} 
                                deleteMovie={deleteMovie}
                                key={x.id} />)
                        }
                    </tbody>
                    </Table>
                </Container>
            }
        </div>
    );
};

export default Movies;
