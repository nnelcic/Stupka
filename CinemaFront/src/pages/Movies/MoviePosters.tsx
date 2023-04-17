import image from "../../assets/Main.png";
import MovieItem from "../../components/Admin/movies/MovieItem";

const MoviePosters: React.FC<{}> = () => {

  return (
    <div style={{ backgroundImage: `url(${image})`}}>
      <h1 className="text-center text-white">Зараз у кіно</h1>  
      <MovieItem
        posterUrl="https://i.ebayimg.com/images/g/MHIAAOSwsMhiib8p/s-l1600.jpg"
        originalTitle="Titanic"
        title="Затонувший корабель"
      />   
    </div> 
  )
}

export default MoviePosters;