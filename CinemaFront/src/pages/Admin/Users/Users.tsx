import { Container, Table } from "react-bootstrap";
import UserRow from "../../../components/Admin/Users/UserRow";
import AlertDismissible from "../../../components/shared/AlertDismissible";
import { useUsers } from "../../../hooks/UsersHook";

const Users: React.FC<{}> = () => {
    
    const { users, show, deleteUser, setShow, occuredError } = useUsers();

    return (
        <div>
            {users &&
                <Container fluid className="p-5 pt-3 text-center">
                    {show && <AlertDismissible func={setShow} error={occuredError}/>}
                    <Table striped bordered hover className="mt-2" variant="dark" responsive>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>PhoneNumber</th>
                            <th>BirthDate</th>
                            <th>Role</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(x => 
                            <UserRow 
                                user={x} 
                                deleteUser={deleteUser}
                                key={x.id} />)
                        }
                    </tbody>
                    </Table>
                </Container>
            }
        </div>
    );
};

export default Users;
