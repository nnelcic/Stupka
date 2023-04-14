import { Container, Table } from "react-bootstrap";
import UserRow from "../../../components/Admin/users/UserRow";
import AlertDismissible from "../../../components/shared/AlertDismissible";
import { useUsers } from "../../../hooks/UsersHook";
import { useContext, useState } from "react";
import ShowUser from "../../../components/Admin/users/ShowUser";
import { ModalContext } from "../../../context/ModalContext";
import ModalWindow from "../../../components/shared/ModalWindow";
import PurchasesUser from "../../../components/Admin/users/PurchasesUser";
import UpdateUser from "../../../components/Admin/users/UpdateUser";
import DeleteUser from "../../../components/Admin/users/DeleteUser";

const Users: React.FC<{}> = () => {
    
    const { users, show, deleteUser, setShow, occuredError, getUser, user } = useUsers();
    const { modal, open, close } = useContext(ModalContext);
    const [currentUserId, setCurrentUserId] = useState<number>(0);
    const [currentOption, setCurrentOption] = useState<string>('');
    const [size, setSize] = useState<string>('');

    return (
        <div>
            {users &&
                <Container fluid className="p-5 pt-3 text-center">
                    {show && <AlertDismissible func={setShow} error={occuredError}/>}
                    
                    {
                        modal &&
                        <ModalWindow title={`Користувач Id ${currentUserId}`} 
                            close={close}
                            modal={modal} 
                            size={size}>
                            {
                                currentOption === 'showUser' 
                                    ? <ShowUser userId={currentUserId} getUser={getUser} user={user} />
                                : currentOption === 'purchasesUser' 
                                    ? <PurchasesUser userId={currentUserId} /> 
                                : currentOption === 'updateUser' 
                                    ? <UpdateUser userId={currentUserId} />
                                : <DeleteUser deleteUser={deleteUser} close={close} userId={currentUserId} />
                            }
                        </ModalWindow>
                    }

                    <Table striped bordered hover className="mt-2" variant="dark" responsive>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Ім'я</th>
                            <th>Прізвище</th>
                            <th>Пошта</th>
                            <th>Телефон</th>
                            <th>Дата народження</th>
                            <th>Роль</th>
                            <th>Опції</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(x => 
                            <UserRow 
                                user={x} 
                                key={x.id} 
                                open={open}
                                modal={modal}
                                setCurrentUserId={setCurrentUserId}
                                setCurrentOption={setCurrentOption}
                                setSize={setSize}
                                />)
                        }
                    </tbody>
                    </Table>
                </Container>
            }
        </div>
    );
};

export default Users;
