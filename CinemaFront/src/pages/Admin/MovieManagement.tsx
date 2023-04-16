import useMovie from "../../hooks/MovieHook";
import AdminPage from "../../components/ui/AdminPage";
import Movie from "./Movie"
import image from "../../assets/Main.png";

const MovieManagement: React.FC<{}> = () => {
    const { showMovie, setShowMovie } = useMovie();       
   
    return (
        <div style={{ backgroundImage: `url(${image})`}}>
            <AdminPage/>
            {showMovie && <Movie setShowMovie={setShowMovie} />}            
        </div>
    );
};

export default MovieManagement;