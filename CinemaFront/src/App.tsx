import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/ui/header";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import MoviePosters from "./pages/Movies/MoviePosters";
import { FAQ } from "./pages/Home/FAQ";
import AdminMain from "./pages/Admin/Main"
import Account from "./pages/Authentication/Account";
import Users from "./pages/Admin/Users";
import Movies from "./pages/Admin/Movies";
import Seanses from "./pages/Admin/Seanses";
import CinemasManagement from "./pages/Admin/CinemaManagement";

function App() {
    return (
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/admin/main" element={<AdminMain />}></Route>
                    <Route path="/admin/cinema_management" element={<CinemasManagement />}></Route>
                    <Route path="/admin/users" element={<Users />}></Route>                  
                    <Route path="/admin/movies" element={<Movies />}></Route>
                    <Route path="/admin/seanses" element={<Seanses />}></Route>
                    <Route path="/news/news" element={<News/>}></Route>
                    <Route path="/movies/movieposters" element={<MoviePosters/>}></Route>
                    <Route path="/home/faq" element={<FAQ/>}></Route>                     
                    <Route path="/account" element={<Account />}></Route>
                </Routes>
        </BrowserRouter>
    );
}

export default App;
