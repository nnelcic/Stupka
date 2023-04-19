import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import TicketGroup from './TicketGroup';
import Purchase from '../../../types/purchaseTypes/Purchase';

interface PropsPurchaseItem {
    purchase: Purchase;
}

function PurchaseItem({purchase}: PropsPurchaseItem) {
  return (
    <>
        <Row>
            <Col>
                <Card className="m-5 text-center" bg="success" text="light">
                <Card.Header>Покупка №{purchase.id}</Card.Header>
                <Card.Body>
                    <Card.Title>Дата покупки: {purchase.purchaseDate}</Card.Title>
                    <Card.Text>
                        {purchase.promocode} 
                        Ціна {purchase.price} ₴ 
                        {purchase.tickets.length > 0 && <div>
                        Кількість квитків: {purchase.tickets.length}</div>}
                    </Card.Text>
                    <Row>
                    <CardGroup>
                        {purchase.tickets.map(x => <TicketGroup ticket={x} key={x.id} />)}
                    </CardGroup>
                </Row>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default PurchaseItem;