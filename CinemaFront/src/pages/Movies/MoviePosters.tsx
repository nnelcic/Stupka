import image from "../../assets/Main.png";
import MovieItem from "../../components/Admin/movies/MovieItem";
import MovieInfo from "../../types/movieTypes/MovieInfo";



const MoviePosters: React.FC<{}> = () => {

  return (
    <div style={{ backgroundImage: `url(${image})`}} className="min-vh-100">
      <h1 className="text-center text-white">Зараз у кіно</h1>  
        
    </div> 
  )
}

export default MoviePosters;