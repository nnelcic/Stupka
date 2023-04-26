import {FC, useState} from 'react';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';
import RegisterButton from './RegisterButton';
import MainLogo from './logo';
import {Button, Col, Container, Row } from 'react-bootstrap';
import logo from '../../assets/stupka.svg';

export const Header: FC<{}> = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

   const [isMobile, setIsMobile] = useState(false);
      
    return (   
        <nav className='navbar border-bottom'>
             <Link to="/" className='main-logo'>
                    <img src={logo} alt='Stupka' className="main-logo" />
                   
             </Link>
             
             <ul className={isMobile? "nav-links-mobile" : "nav-links"}
                onClick={() => setIsMobile(false)}
             >
                <Link to="/upcoming" className='upcoming'>
                    <li>Популярні</li>
                </Link>

                <Link to="/movies/moviepostermanager" className='movies-nav'>
                    <li>Фільми</li>
                </Link>
                <Link to="/movies/seances" className='seanses'>
                    <li>Сеанси</li>
                </Link>

                {token
                    ?
                    role === "Admin"
                    ? 
                    <>
                    <Link to="/admin/cinemamanagement" className='admin'>
                        <li>Адмін</li>
                    </Link>

                    <Link to="/account" className='account'>
                        <li>Особистий кабінет</li>
                    </Link>
                    </>
                    :
                    <>
                    <Link to="/account" className='account'>
                        <li>Особистий кабінет</li>
                    </Link>
                    </>
                    :
                    <>
                        <li >
                             <AuthButton />
                         </li>
                         <li>
                            <RegisterButton />
                         </li>
                    </>
                }
             </ul>

             <button  className='mobile-menu-icon'
                onClick={() => setIsMobile(!isMobile)}             
             >                 
                {
                    isMobile ? 
                        (<i className='menu'>                            
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="  bi bi-x-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                   <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        </i>)
                        :
                        (<i className='close'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                                     <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        </i>
                            
                        )
                                    
                }
             </button>
        </nav>

        // <nav className="navbar navbar-expand bg-black text-white border-bottom" id="main_header">                    
        //     <Link to="/">
        //         <MainLogo/>
        //     </Link>
        //     <div className="navbarNav collapse navbar-collapse">
        //         <Container>
        //             <Row>Популярні
        //                 <Col>
        //                 <ul className=" header_list navbar-nav text-white">
        //                     <li className="nav-item text-white">
        //                         <Link to="/upcoming" style={{ textDecoration: 'none' }} className="nav-link px-2 text-white">
        //                             Популярні</Link>                      
        //                     </li> 
        //                     <li className="nav-item">
        //                         <Link to="/movies/moviepostermanager" style={{ textDecoration: 'none' }} className="nav-link px-2 text-white">
        //                             Фільми</Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link to="/movies/seances" style={{ textDecoration: 'none' }} className="nav-link px-2 text-white">
        //                             Сеанси</Link>
        //                     </li>
        //                     <li>
        //                         <Button variant="outline-white" className="close-nav text-white">
        //                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="  bi bi-x-square" viewBox="0 0 16 16">
        //                             <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        //                             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        //                             </svg>
        //                     </Button>
        //                         </li>
        //                 </ul> 
                        
        //                 </Col>
        //                 <Col>
        //                 <div className="collapse navbar-collapse float">

        //                     <ul className=" header_list navbar-nav text-white">
        //                     {token
        //                     ?
        //                     role === "Admin"
        //                     ? 
        //                     <>

        //                         <li className="nav-item">
        //                         <Link to="/admin/cinemamanagement" style={{ textDecoration: 'none' }} className="nav-link px-2 text-white">
        //                             Адмін</Link>
        //                         </li>
        //                         <li className="nav-item">
        //                         <Link to="/account" style={{ textDecoration: 'none' }} className="nav-link px-2 text-white">
        //                             {/* Особистий Кабінет */}
        //                             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-person-square" viewBox="0 0 16 16">
        //                             <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        //                             <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
        //                             </svg>
        //                         </Link>
        //                         </li>
                                
        //                     </>
        //                     :
        //                     <>
        //                         <li className="nav-item">
        //                         <Link to="/account" style={{ textDecoration: 'none' }} className="nav-link px-2 text-white">
        //                             {/* Особистий Кабінет */}
        //                             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-person-square" viewBox="0 0 16 16">
        //                             <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        //                             <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
        //                             </svg>
        //                         </Link>
        //                         </li>
        //                     </>
        //                     :
        //                     <>
        //                         <li>
        //                         <AuthButton />
        //                         </li>
        //                         <li>
        //                         <RegisterButton />
        //                         </li>
        //                     </>
        //                     }
        //                         </ul>
        //                     </div>
        //                    </Col>
        //                    <Col>
        //                    <ul>
                                
        //                    </ul>
        //                    </Col>
        //                </Row>
        //              </Container>

        //              <Button variant="outline-white" className="open-nav text-white">
        //              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-list" viewBox="0 0 16 16">
        //                 <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        //              </svg>
        //              </Button>
        //              </div> 
                                          
        // </nav>                  
    )
}

export default Header;