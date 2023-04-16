import image from "../../assets/Main.png";
import Button from "./ButtonBuyTicket";
import "./styles.css";
import SlideShow from "./slideshow";
import { Col, Container, Row } from "react-bootstrap";
import { FC } from "react";

export const MainBlock: FC<{}> = () => {
    return (
        
        <div id="main" style={{ backgroundImage: `url(${image})` }}>
            <Container>
                <Row>
                    <Col>
                    <div id="about_cinema">
                        <h1>Про кінотеатр</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Soluta, molestias! Veniam cum ut quis id doloribus quasi?
                            Id, recusandae dolor? Possimus quos dolorem, quia maxime
                            tempore dolore. Reprehenderit, eum saepe?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Soluta, molestias! Veniam cum ut quis id doloribus quasi?
                            Id, recusandae dolor? Possimus quos dolorem, quia maxime
                            tempore dolore. Reprehenderit, eum saepe?
                        </p>

                         <div className="my-5 mx-2 px-4">
                                 <Button />
                         </div>
                         </div>
                    </Col>

                    <Col id="slide">
                            <SlideShow/>
                    </Col>
                </Row>                
            </Container>  

            <Container>
            <Row >
                    <h2 className="text-center text-white my-4">Незабаром у прокаті</h2>
                </Row>    
            </Container>        
            
        </div>
    );
};
