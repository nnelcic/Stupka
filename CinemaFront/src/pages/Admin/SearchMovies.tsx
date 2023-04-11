import { FC } from "react";
import FindMovie from "../../components/forms/FindMovie";
import AdminPage from "../../components/ui/AdminPage";

const SearchMovies: FC<{}> = () => {
    return (
        <>
            <AdminPage/>
            <FindMovie/>
        </>      
    );
};

export default SearchMovies;
