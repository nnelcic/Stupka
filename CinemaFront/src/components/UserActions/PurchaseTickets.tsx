import { Button, Card, Col, Container, Form, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Seanse from "../../types/seanseTypes/Seanse";
import SeatsForPurchase from "./SeatsForPurchase";
import { useState } from "react";
import usePurchases from "../../hooks/PurchasesHook";
import CustomError, { defaultError } from "../../types/errorTypes/CustomError";
import AlertDismissible from "../shared/AlertDismissible";

interface PurchaseTicketsProps {
    seanse: Seanse;
    setShowSeanses: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    setShowSeanse: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const PurchaseTickets: React.FC<PurchaseTicketsProps> = ({ setShowSeanse, setShowSeanses, seanse }) => {
    const [seatIds, setSeatIds] = useState<number[]>([]);
    const [promocode, setPromocode] = useState('');
    const { purchasing } = usePurchases();
    const [showError, setShowError] = useState(false);
    const [occuredError, setOccuredError] = useState<CustomError>(defaultError);

    const getColor = (color: string) => {
        return color === 'Normal'? 'Звичайне' : 
            color === 'ForDisablers' ? 'Для інвалідів' :
            color === 'ForKissing' ? 'Для поцілунків' : 'VIP'
    }

    const addOrRemoveItemFromArray = (item: number) => {
        if (seatIds.includes(item)) {
            setSeatIds((prevState) =>
            prevState.filter((existing) => existing !== item));
      }
      else {
        setSeatIds((prevState) => [item, ...prevState]);
      }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        purchasing(1, promocode, seatIds, seanse.id, setShowError, setOccuredError);
    };
    var sum = 0;
    seatIds.map(x => {
        sum += seanse.price.cost + seanse.hall.seats.filter(i => i.id === x)[0].seatType.price;
    })

    return (
        <Container className='p-5'>
            <Button variant='outline-danger' className="text-white" onClick={() => {
                setShowSeanses(true)
                setShowSeanse(false)
            }}>
            Назад</Button>
            <Row>
            <Col className="mt-3">
                <Card>
                    <Row>
                        <Col sm={2}> 
                            <img src={seanse.movie.posterUrl} className="w-100" 
                                alt={`Постер ${seanse.movie.title}`} />
                        </Col>
                        <Col sm={4}>
                            <Card.Body className="mt-4">
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

                        <Col sm={4}>
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
                        </Col>
                    </Row>
                </Card>
            </Col>
            </Row>
            <Col className="text-center align-items-center">
                <SeatsForPurchase seanseId={seanse.id} addOrRemoveItemFromArray={addOrRemoveItemFromArray}  
                seats={seanse.hall.seats} setSeatIds={setSeatIds} seatIds={seatIds} />
            </Col>
            <Row className="mt-5">
                {seatIds.map((x, index) => {
                    return (
                        <Card className="mt-3" key={index}>
                            <Row>
                                <Col>
                                    <Card.Body>
                                        <Card.Title>Квиток №{index + 1}</Card.Title>
                                        <Card.Text>
                                            <strong>Ціна квитка: </strong> 
                                            {seanse.price.cost + seanse.hall.seats.filter(i => i.id === x)[0].seatType.price} грн. 
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col>
                                    <Card.Body>
                                        <Col><Card.Title>Місце</Card.Title></Col>
                                        <Card.Text>
                                            {getColor(seanse.hall.seats.filter(i => i.id === x)[0].seatType.type)} | 
                                            Ряд: {seanse.hall.seats.filter(i => i.id === x)[0].row} |
                                            Місце: {seanse.hall.seats.filter(i => i.id === x)[0].seatNumber}
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    );
                })};
            </Row>
            {seatIds.length !== 0 && 
            <div>
                <Row className="mb-3">
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <Card style={{ width: '18rem' }} className="mt-3">
                            <Card.Body>
                                <Card.Title>Всього квитків: {seatIds.length}</Card.Title>
                                <Card.Text>
                                    <strong>Ціна: {sum} грн.</strong> 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

                <Row className="mb-5">
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicPromocode">
                                <Form.Control
                                    type="text"
                                    placeholder="Введіть промокод"
                                    value={promocode}
                                    onChange={(event: any) => setPromocode(event.target.value)}/>
                            </Form.Group>

                            <div className="d-grid gap-2">
                            <Button variant="outline-danger" className="text-white" type="submit">
                                Оформити замовлення</Button>
                            </div>
                            {showError && <AlertDismissible func={setShowError} error={occuredError}/>}
                        </Form>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </div>}
        </Container>
        );
};

export default PurchaseTickets;
