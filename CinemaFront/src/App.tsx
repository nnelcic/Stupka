import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/ui/NavBar";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import Home from "./pages/Home/Home";
import Cinema from "./pages/Admin/Cinema";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/admin/cinema" element={<Cinema />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/signup" element={<Signup />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
