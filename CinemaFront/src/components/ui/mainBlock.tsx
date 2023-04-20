import image from "../../assets/Main.png";
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
                        Українська мережа кінотеатрів є доволі розвиненою в країні. Вона складається з різноманітних кінотеатрів, що пропонують фільми, від блокбастерів до авторського кіно.                       
                        </p>
                        <p>
                        Багато наших кінотеатріврозташовані в крупних містах, таких як Київ, Львів та інші. Ці кінотеатри часто розташовані у торгових центрах, що забезпечує зручний доступ до них для відвідувачів.

                        </p>
                        <p>У кінотеатрах української мережі часто проводяться прем'єри нових фільмів, які дивляться широкі маси глядачів. Крім того, вони проводять різноманітні акції та знижки на квитки, що сприяє збільшенню популярності серед відвідувачів.

                          </p>

                         </div>
                    </Col>

                    <Col id="slide">
                        <SlideShow/>
                    </Col>
                </Row>                
            </Container>  

            <Container>
                <Row>
                    <h2 className="text-center text-white my-4">Незабаром у прокаті</h2>
                </Row>    
            </Container>        
            
        </div>
    );
};
