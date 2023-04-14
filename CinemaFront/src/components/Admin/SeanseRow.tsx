import { Button, Col, Container, Row } from "react-bootstrap";
import ISeanse from "../../types/Seanse";

interface SeanseRowProps {
    seanse: ISeanse;
    deleteSeanse: (id: number) => void;
    updateSeanse: (id: number) => void;
}

const SeanseRow: React.FC<SeanseRowProps> = ({ seanse, deleteSeanse, updateSeanse }) => {

    return (
        <tr>
            <td>{seanse.id}</td>
            <td>{seanse.startTime}</td>
            <td>{seanse.movie.title}</td>
            <td>{seanse.hallId}</td>
            <td>{seanse.price.cost}</td>            
            <td>
                <Container>
                    <Row>
                        
                        <Col>
                            <Button variant="warning"
                                onClick={() => updateSeanse(seanse.id)}>
                                Редагувати</Button>
                        </Col>
                        <Col>
                            <Button variant="danger"
                                onClick={() => deleteSeanse(seanse.id)}>
                                Видалити
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </td>
        </tr>
    );
};

export default SeanseRow;