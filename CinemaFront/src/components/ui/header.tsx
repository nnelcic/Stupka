import {FC, useState} from 'react';
import { MainLogo } from './logo';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';
import RegisterButton from './RegisterButton';

export const Header: FC<{}> = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
      
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
                    {token
                    ?
                        role === "Admin"
                        ? 
                        <>
                            <li className="nav-item">
                                <Link to="/Admin/Main" style={{ textDecoration: 'none' }} className="nav-link px-2 text-white">
                                    Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Account" style={{ textDecoration: 'none' }} className="nav-link px-2 text-white">
                                    Особистий Кабінет</Link>
                            </li>
                        </>
                        :
                        <>
                            <li className="nav-item">
                                <Link to="/Account" style={{ textDecoration: 'none' }} className="nav-link px-2 text-white">
                                    Особистий Кабінет</Link>
                            </li>
                        </>
                    :
                        <>
                            <li>
                                <AuthButton />
                            </li>
                            <li>
                                <RegisterButton />
                            </li>
                        </>
                    }
                </ul>
            </div>                                      
        </nav>                  
    )
}

export default Header;