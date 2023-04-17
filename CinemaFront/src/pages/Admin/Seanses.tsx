import { Container, Table, Button } from "react-bootstrap";
import SeanseRow from "../../components/Admin/seanses/SeanseRow";
import CreateSeanse from "../../components/Admin/seanses/CreateSeanse";
import DeleteSeanse from "../../components/Admin/seanses/DeleteSeanse";
import UpdateSeanse from "../../components/Admin/seanses/UpdateSeanse";
import AlertDismissible from "../../components/shared/AlertDismissible";
import ModalWindow from "../../components/shared/ModalWindow";
import useSeanses from "../../hooks/SeanseHook";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import Seanse, {defaultSeanse} from "../../types/seanseTypes/Seanse";
import CustomError, { defaultError } from "../../types/errorTypes/CustomError";

interface SeansesProps {    
    setShowSeanse: (flag: boolean) => void;   
}

const Seanses: React.FC<SeansesProps> = ({ setShowSeanse }) => {
    const { modal, open, close } = useContext(ModalContext);
    const [currentOption, setCurrentOption] = useState<string>('');
    const [size, setSize] = useState<string>('');
    const [currentSeanseId, setCurrentSeanseId] = useState<number>(0);
    const [seanse, setSeanse] = useState<Seanse>(defaultSeanse);
    const title: string = currentOption === 'updateSeanse' ? `Редагувати сеанс Id ${currentSeanseId}` :
        currentOption === 'createSeanse'? `Створити сеанс` : `Видалити сеанс Id ${currentSeanseId}`
    
    const [showError, setShowError] = useState(false);
    const [occuredError, setOccuredError] = useState<CustomError>(defaultError);

    const [rerender, setRerender] = useState(false);
    const { seanses, fetchSeanses } = useSeanses();

    useEffect(() => {
        fetchSeanses();
    }, [rerender]);

    return ( 
        <Container fluid className="p-5 pt-2 text-center">
            {showError && <AlertDismissible func={setShowError} error={occuredError}/>}
            
            {modal && <ModalWindow title={title} 
                close={close}
                modal={modal}
                size={size}>
                {currentOption ===  'updateSeanse' ? 
                <UpdateSeanse setShowError={setShowError} setOccuredError={setOccuredError} 
                close={close} seanse={seanse} setRerender={setRerender} /> : 
                currentOption ===  'createSeanse' ?
                <CreateSeanse setShowError={setShowError} setOccuredError={setOccuredError}
                close={close} seanse={seanse} setRerender={setRerender} /> :
                <DeleteSeanse setShowError={setShowError} setOccuredError={setOccuredError}
                close={close} seanseId={currentSeanseId} setRerender={setRerender} />}
            </ModalWindow>}

            <Button variant="success" size="lg" onClick={() => {
                setCurrentOption('createSeanse');
                setSeanse(seanse);
                open();
                setSize('lg');
            }}>Створити</Button>
               
        <Table striped bordered hover className="mt-2" variant="dark" responsive>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Час показу</th>
                    <th>Зал</th>
                    <th>Фільм</th>
                    <th>Ціна</th>                   
                    <th>Опції</th>
                </tr>
            </thead>
            <tbody>
                {seanses.map(x => 
                <SeanseRow 
                    setSeanse={setSeanse}                                    
                    setShowSeanse={setShowSeanse}
                    seanse={x}
                    key={x.id} 
                    open={open}
                    modal={modal}
                    setCurrentSeanseId={setCurrentSeanseId}
                    setCurrentOption={setCurrentOption}
                    setSize={setSize}
                />)}
            </tbody>
        </Table>
        </Container>
    )
};

export default Seanses;