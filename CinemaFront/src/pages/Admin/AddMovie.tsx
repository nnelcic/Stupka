import AdminPage from "../../components/ui/AdminPage";
import http from "../../http-common";
import image from "../../assets/Main.png";

const AddMovie: React.FC<{}> = () => {
       
   
    return (
        <div style={{ backgroundImage: `url(${image})`}}>
            <AdminPage/>           
           
            <h1>Add</h1>
        </div>
    );
};

export default AddMovie;
