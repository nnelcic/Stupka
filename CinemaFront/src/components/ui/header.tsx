import {FC} from 'react';
import { MainLogo } from './logo';
import { Link } from 'react-router-dom';

export const Header: FC<{}> = () => {    
    return (
            <nav className="navbar navbar-expand-lg bg-black text-white border-bottom" id="main_header">                    
                <Link to="/">
                    <MainLogo/>
                </Link>                        
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav text-white" id="header_list">
                    <li className="nav-item text-white">
                        <Link to="/News/News" style={{ textDecoration: 'none' }} className="nav-link px-2 text-white">
                            Новини</Link>                           
                    </li> 
                    <li className="nav-item">
                        <Link to="/Movies/Movies" style={{ textDecoration: 'none' }} className="nav-link px-2 text-white">
                            Фільми</Link>
                    </li> 
                    <li className="nav-item">
                        <Link to="/Admin/Main" style={{ textDecoration: 'none' }} className="nav-link px-2 text-white">
                            Admin</Link>
                    </li> 
                    <li className="nav-item">
                        <Link to="/login" style={{ textDecoration: 'none' }} className="nav-link px-2 text-white">
                        Кабінет користувача</Link>
                    </li> 
                    <li className="nav-item">
                        <Link to="/signup" style={{ textDecoration: 'none' }} className="nav-link px-2 text-white">
                        Зареєструватись</Link>
                    </li>                    
                    <li className="nav-item">
                        <Link to="/ticket" style={{ textDecoration: 'none' }} className="nav-link px-2 text-white">
                        Квиток</Link>
                    </li>                    
                </ul>
                </div>                                      
            </nav>
    )
}