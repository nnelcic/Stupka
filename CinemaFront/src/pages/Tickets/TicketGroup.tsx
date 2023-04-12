import { Card } from 'react-bootstrap'
import { ITicket } from './Tickets'

interface TicketGroupProps {
    ticket: ITicket
}

const pdf = "https://localhost:7282/api/purchase/ticket/";

    const downloadFileAtUrl = (url: string) => {
        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const blobURL = window.URL.createObjectURL(new Blob([blob]));
                const aTag = document.createElement("a");
                aTag.href = blobURL;
                aTag.setAttribute("download", 'ticket.pdf');
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
            })
    }

export default function TicketGroup({ticket}: TicketGroupProps) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={ticket.seanse.movie.posterUrl} />
          <Card.Body>
            <Card.Title>
              <h3>Квиток: {ticket.id}</h3> 
              <h4>Ціна квитка: {ticket.price}₴</h4>
            </Card.Title>
            <Card.Text>
              Сеанс: {ticket.seanse.id}<br></br>
              Зал: {ticket.seanse.hallId}<br></br>
              Дата початку: {ticket.seanse.startTime}<br></br>

              Назва фільму: {ticket.seanse.movie.title}<br></br>
              Назва фільму в оригіналі: {ticket.seanse.movie.originalTitle}<br></br>
              Тривалість: {ticket.seanse.movie.duration}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Місце: Ряд {ticket.seat.row} |
              Номер {ticket.seat.seatNumber} |
              Тип місця {ticket.seat.seatType.type}
            </small>
            <button className='ms-5' onClick={() => downloadFileAtUrl(pdf + ticket.id)}>Download</button>
          </Card.Footer>
      </Card>
    </>
  )
}
