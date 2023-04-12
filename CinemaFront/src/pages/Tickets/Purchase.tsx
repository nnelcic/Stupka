import { IPurchase } from './Tickets'
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import TicketGroup from './TicketGroup';

interface PropsPurchase {
    purchase: IPurchase;
}

function Purchase({purchase}: PropsPurchase) {
  return (
    <>
        <Row>
            <Col></Col>
            <Col md="auto">
                <Card className="m-5 mb-3 text-center" style={{ width: '35rem' }} bg="success" text="light">
                <Card.Header>Покупка №{purchase.id}</Card.Header>
                <Card.Body>
                    <Card.Title>Дата покупки: {purchase.purchaseDate}</Card.Title>
                    <Card.Text>
                        Ціна {purchase.price} ₴ | Кількість квитків: {purchase.tickets.length}
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>
        <Row>
            <CardGroup>
                {purchase.tickets.map(x => <TicketGroup ticket={x} key={x.id} />)}
            </CardGroup>
        </Row>
    </>
  )
}

export default Purchase