import { FC } from "react";
import image from "../../assets/Main.png";
import "./styles.css";

export const MainAdminPage: FC<{}> = () => {
    return (
        <div style={{ backgroundImage: `url(${image})` }} id="admin">
            <h1 className="text-white">Hello, Admin</h1>
        </div>
    )
}