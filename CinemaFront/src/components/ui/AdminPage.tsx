import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from "react-bootstrap";

const AdminPage: React.FC<{}> = () => {
   
    return (
        <header className=" p-3 bg-black bg-body=010101 text-white border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">                                                   
    
            <div className="dropdown">  
           
            <Navbar variant="dark" expand="lg" className="bg-black text-white font-weight-bold">
                <Container fluid className="nav col-12 col-lg-auto me-lg-auto mb-2 jusitfy-content-center mb-md-0 text-body-emphasis">        
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Кінотеатри"
                        menuVariant="dark"                     
                        >                           
                        <NavDropdown.Item href="#action/3.3">Знайти кінотеатр</NavDropdown.Item>   
                        <NavDropdown.Item href="#action/3.1">
                            <Link to="/admin/cinema" className="nav-link px-2 text-white">Додати кінотеатр</Link>                
                            </NavDropdown.Item>            
                        </NavDropdown>
                    </Nav>

                    <Nav>
                            <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Сеанси"
                            menuVariant="dark"
                            >
                            <NavDropdown.Item href="#action/3.1">Знайти сеанс            
                                </NavDropdown.Item>              
                            <NavDropdown.Item href="#action/3.3">Додати сеанс</NavDropdown.Item>  
                            <NavDropdown.Item href="#action/3.3">Ціни</NavDropdown.Item>              
                            </NavDropdown>
                        </Nav>

                        <Nav>
                            <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Фільми"
                            menuVariant="dark"
                            >
                            <NavDropdown.Item>
                                <Link to="/admin/searchmovies"> Знайти фільм</Link>                             
                            </NavDropdown.Item>              
                            <NavDropdown.Item href="/admin/addnewmovie">Додати фільм</NavDropdown.Item>  

                            <NavDropdown.Item>
                                <Link to="/admin/changemovie"> Оновити фільм</Link>                             
                            </NavDropdown.Item> 

                            <NavDropdown.Item>
                                <Link to="/admin/deletemoviebyid"> Видалити фільм</Link>                             
                            </NavDropdown.Item>             
                            </NavDropdown>                            
                            
                        </Nav>

                        <Link to="/admin/users">
                            <Button>Users</Button>
                        </Link>

                </Navbar.Collapse>
            </Container>
            </Navbar>      
 
            </div>
    
             </div> 
            </div>                        
        </header>
    );
};

export default AdminPage;

