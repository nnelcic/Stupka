import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/ui/header";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import MoviePosters from "./pages/Movies/MoviePosters";
import { FAQ } from "./pages/Home/FAQ";
import AdminMain from "./pages/Admin/Main"
import Account from "./pages/Authentication/Account";
import Users from "./pages/Admin/Users";
import CinemasManagement from "./pages/Admin/CinemaManagement";
import MovieManagement from "./pages/Admin/MovieManagement";
import SeanseManagement from "./pages/Admin/SeanseManagement";
import PriceManagement from "./pages/Admin/PriceManagement";
import { Footer } from "./components/ui/footer";
import Promocodes from "./pages/Admin/Promocodes";
import SingleMovie from "./pages/Movies/SingleMovie";
import AddMovie from "./pages/Admin/AddMovie";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/account" element={<Account />}></Route>
                        <Route path="/news/news" element={<News/>}></Route>
                        <Route path="/movies/movieposters" element={<MoviePosters/>}></Route>
                        <Route path="/admin/main" element={<AdminMain/>}></Route>
                        <Route path="/admin/users" element={<Users />}></Route>
                        <Route path="/home/faq" element={<FAQ/>}></Route>
                        <Route path="/news/news" element={<News/>}></Route>
                        <Route path="/admin/promocodes" element={<Promocodes />}></Route>
                        <Route path="/admin/cinemamanagement" element={<CinemasManagement />}></Route>
                        <Route path="/admin/moviemanagement" element={<MovieManagement />}></Route>
                        <Route path="/admin/seansemanagement" element={<SeanseManagement />}></Route>
                        <Route path="/movies/singlemovie" element={<SingleMovie/>}></Route>
                        <Route path="/admin/movie" element={<MovieManagement/>}></Route>
                        <Route path="/admin/pricemanagement" element={<PriceManagement/>}></Route>
                        <Route path="/admin/addmovie" element={<AddMovie/>}></Route>
                    </Routes>

                    <Footer/>
                </div>               
            </BrowserRouter>
        </div>
    );
}

export default App;
