import { Container, Table } from "react-bootstrap";
import AlertDismissible from "../../components/shared/AlertDismissible";
import AdminPage from "../../components/ui/AdminPage";
import SeanseRow from "../../components/Admin/SeanseRow";
import { useSeanses } from "../../hooks/SeanseHook";

const Seanses: React.FC<{}> = () => {
    
    const { seanses, show, deleteSeanse, updateSeanse, setShow, occuredError } = useSeanses();

    return (
        <div>
            <AdminPage/>
            {seanses &&
                <Container fluid className="p-5 pt-3 text-center">
                    {show && <AlertDismissible func={setShow} error={occuredError}/>}
                    <Table striped bordered hover className="mt-2" variant="dark" responsive>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Початок сеансу</th>
                            <th>Фільм</th>
                            <th>Холл</th>
                            <th>Ціна</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            seanses.map(x => 
                            <SeanseRow 
                                    seanse={x}
                                    deleteSeanse={deleteSeanse}
                                    key={x.id} 
                                    updateSeanse={updateSeanse }
                            />)
                        }
                    </tbody>
                    </Table>
                </Container>
            }
        </div>
    );
};

export default Seanses;