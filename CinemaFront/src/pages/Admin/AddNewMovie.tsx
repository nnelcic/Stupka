import { FC } from "react";
import AddMovie from "../../components/forms/AddMovie";
import AdminPage from "../../components/ui/AdminPage";

const AddNewMovie: FC<{}> = () => {
    return (
        <>
            <AdminPage/>
            <AddMovie/>
        </>      
    );
};

export default AddNewMovie;
