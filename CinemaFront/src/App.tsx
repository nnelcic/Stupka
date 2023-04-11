import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/ui/header";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import Home from "./pages/Home/Home";
import Cinema from "./pages/Admin/Cinema";
import News from "./pages/News/News";
import Movies from "./pages/Movies/Movies";
import { FAQ } from "./pages/Home/FAQ";
import AdminMain from "./pages/Admin/Main"
import SearchMovies from "./pages/Admin/SearchMovies";
import AddNewMovie from "./pages/Admin/AddNewMovie";
import ChangeMovie from "./pages/Admin/ChangeMovie";
import DeleteMovieById from "./pages/Admin/DeleteMovieById";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/admin/cinema" element={<Cinema />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/signup" element={<Signup />}></Route>  
                        <Route path="/news/news" element={<News/>}></Route>
                        <Route path="/movies/movies" element={<Movies/>}></Route>
                        <Route path="/admin/main" element={<AdminMain/>}></Route>
                        <Route path="/admin/searchMovies" element={<SearchMovies/>}></Route>   
                        <Route path="/admin/addNewMovie" element={<AddNewMovie/>}></Route> 
                        <Route path="/admin/changeMovie" element={<ChangeMovie/>}></Route> 
                        <Route path="/admin/deletemoviebyid" element={<DeleteMovieById/>}></Route>                  
                        <Route path="/home/faq" element={<FAQ/>}></Route>                     
                    </Routes>
                </div>               
            </BrowserRouter>
        </div>
    );
}

export default App;
