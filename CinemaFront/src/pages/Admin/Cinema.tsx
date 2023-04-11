import React from "react";
import AddCinema from "../../components/forms/AddCinema";
import AdminPage from "../../components/ui/AdminPage";

const Cinema: React.FC<{}> = () => {
    return (
        <>
            <AdminPage/>
            <AddCinema />
        </>
    );
};

export default Cinema;
