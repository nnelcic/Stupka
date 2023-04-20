import { Col, Card, Row, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import Seanse from "../../types/seanseTypes/Seanse";

interface SeanseItemProps {
    seanse: Seanse;
    setShowSeanses: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    setShowSeanse: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    setSeanse: (value: Seanse) => void;
}

const SeanseItem: React.FC<SeanseItemProps> = ({ setSeanse, setShowSeanse, setShowSeanses, seanse}) => {
    return (
        <Col className="mt-3">
            <Card>
                <Row>
                    <Col sm={2} className="p-1 ms-3"> 
                        <img src={seanse.movie.posterUrl} className="w-100" 
                            alt={`Постер ${seanse.movie.title}`} />
                    </Col>
                    <Col sm={4}>
                        <Card.Body className="mt-5">
                            <Card.Title>Сеанс №{seanse.id}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                            Зал №{seanse.hall.hallNumber}
                            </Card.Subtitle>
                            <Card.Text>Початок сеансу: {seanse.startTime}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                <strong>Фільм:</strong> {seanse.movie.title}
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Оригінальна назва:</strong> {seanse.movie.originalTitle}
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col sm={4}  className="mt-3">
                        <ListGroup className="mt-5">
                            <ListGroupItem>
                                <strong>Тривалість:</strong> {seanse.movie.duration} хвилин
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Дата виходу:</strong> {seanse.movie.releaseDate.toString()}
                            </ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Text>
                                <strong>Ціна квитка:</strong> {seanse.price.cost} грн.
                            </Card.Text>
                        </Card.Body>
                        <Button variant='outline-danger' className="ms-3" onClick={() => {
                            setShowSeanses(false);
                            setShowSeanse(true);
                            setSeanse(seanse);
                        }}>Перейти</Button>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}

export default SeanseItem;