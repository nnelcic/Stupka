import { FC } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Footer: FC<{}> = () => {
    return (
        <footer className="fixed-bottom">
            <div className="p-3 bg-black border-top" id="footer">
                <ul
                    className="nav col-12 col-lg-auto me-lg-auto mb-2 jusitfy-content-center mb-md-0"
                    id="footer-list"
                >
                    <li>
                        <Link
                            to="/"
                            style={{ textDecoration: "none" }}
                            className="nav-link px-2 text-white"
                        >
                            <p className="fnt">Допомога</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            style={{ textDecoration: "none" }}
                            className="nav-link px-2 text-white"
                        >
                            <p className="fnt">Про нас</p>
                            
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            style={{ textDecoration: "none" }}
                            className="nav-link px-2 text-white"
                        >
                            <p className="fnt">Контакти</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Home/FAQ"
                            style={{ textDecoration: "none" }}
                            className="nav-link px-2 text-white"
                        >
                            <p className="fnt">FAQ</p>
                        </Link>
                    </li>
                    <li>
                    <div className="p-3 bg-black text-white text-center"
                        id="copyright">
                        <p>© 2023 Stupka cinema. All Rights Reserved.</p>
                    </div>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
