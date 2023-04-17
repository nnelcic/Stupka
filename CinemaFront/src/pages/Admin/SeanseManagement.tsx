import useSeanses from "../../hooks/SeanseHook";
import AdminPage from "../../components/ui/AdminPage";
import Seanses from "./Seanses";
import image from "../../assets/Main.png";
import { GetAllPrices } from "../../components/Admin/seanses/GetAllPrices";

const SeanseManagement: React.FC<{}> = () => {
    const { showSeanse, setShowSeanse } = useSeanses();       
   
    return (
        <div style={{ backgroundImage: `url(${image})`}} className="min-vh-100">
            <AdminPage/>
            <GetAllPrices/>
            {showSeanse && <Seanses setShowSeanse={setShowSeanse} />}
        </div>
    );
};

export default SeanseManagement;
