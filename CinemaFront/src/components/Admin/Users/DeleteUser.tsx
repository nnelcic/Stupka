import { Button, Col, Container, Row } from "react-bootstrap";

interface DeleteUserProps {
    userId: number; 
    deleteUser: (id: number) => void;
    close: () => void;
}

const DeleteUser: React.FC<DeleteUserProps> = ({userId, deleteUser, close}) => {

    return (
        <>
            <h3 className="text-center mb-4">Видалити цього користувача?</h3>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Button variant="danger" className="btn-lg" onClick={() => {
                            deleteUser(userId);
                            close();
                        }}>
                            Видалити
                        </Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}

export default DeleteUser;