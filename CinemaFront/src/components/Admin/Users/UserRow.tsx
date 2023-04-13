import { Button, Col, Container, Row } from "react-bootstrap";
import { User } from "../../../types/User";

interface UserRowProps {
    user: User;
    deleteUser: (id: number) => void;
}

const UserRow: React.FC<UserRowProps> = ({ user, deleteUser }) => {

    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.birthday.slice(0, 10)}</td>
            <td>{user.roleName}</td>
            <td>
                <Container>
                    <Row>
                        <Col>
                            <Button variant="light">Info</Button>
                        </Col>
                        <Col>
                            <Button variant="warning">Edit</Button>
                        </Col>
                        <Col>
                            <Button variant="danger"
                                onClick={() => deleteUser(user.id)}>
                                Delete
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </td>
        </tr>
    );
};

export default UserRow;
