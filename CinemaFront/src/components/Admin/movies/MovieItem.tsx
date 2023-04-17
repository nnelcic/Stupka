import { Button, Card } from "react-bootstrap";

interface MovieItemProps {
    posterUrl: string;
    originalTitle: string;
    title: string
}

const MovieItem: React.FC<MovieItemProps> = ({posterUrl, originalTitle, title}) => {
    return (
        <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src={posterUrl} />
            <Card.Body>
                {/* <Card.Title>{originalTitle}</Card.Title>
                <Card.Text>
                {title}
                </Card.Text> */}
                <Button variant="outline-dark" className="text-black" size="sm">Додати в улюблені</Button>
            </Card.Body>
        </Card>
    );
};

export default MovieItem;

