import { FC } from "react";
import DeleteMovie from "../../components/forms/DeleteMovie";
import AdminPage from "../../components/ui/AdminPage";

const DeleteMovieById: FC<{}> = () => {
    return (
        <>
            <AdminPage/>
            <DeleteMovie/>
        </>      
    );
};

export default DeleteMovieById;