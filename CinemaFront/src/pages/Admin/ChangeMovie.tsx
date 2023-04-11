import { FC } from "react";
import UpdateMovie from "../../components/forms/UpdateMovie";
import AdminPage from "../../components/ui/AdminPage";

const ChangeMovie: FC<{}> = () => {
    return (
        <>
            <AdminPage/>
            <UpdateMovie/>
        </>      
    );
};

export default ChangeMovie;