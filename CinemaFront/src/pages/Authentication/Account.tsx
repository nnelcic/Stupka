import { useState } from "react";
import useUsers from "../../hooks/UsersHook";
import UpdateUserForm from "../../components/forms/UpdateUser";
import image from "../../assets/Main.png";

const Account: React.FC<{}> = () => {
    const [error, setError] = useState('')
    const { currentUser } = useUsers();
    const birthday = new Date(currentUser.birthday).toLocaleDateString();

    const handleLogout = () => {
        localStorage.clear()
        window.location.href = "/"
    };
    
    return (
        <div style={{ backgroundImage: `url(${image})`}} className="min-vh-100">
            <div className="container pt-2 py-5 bg-transparent">
                <div className="card mt-3 bg-dark text-light">
                    <div className="card-header">
                        <h2 className="card-title mb-0">{currentUser.firstName} {currentUser.lastName}, ласкаво просимо!</h2>
                    </div>
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col-sm-3">Електронна пошта:</div>
                            <div className="col-sm-9">{currentUser.email}</div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-3">Ім'я:</div>
                            <div className="col-sm-9">{currentUser.firstName}</div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-3">Прізвище:</div>
                            <div className="col-sm-9">{currentUser.lastName}</div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-3">День народження:</div>
                            <div className="col-sm-9">{birthday}</div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-3">Телефон:</div>
                            <div className="col-sm-9">{currentUser.phoneNumber}</div>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <UpdateUserForm currentUser={currentUser} />
                            <button className="text-white btn btn-outline-danger" onClick={handleLogout}>
                                Вийти
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-2 py-5 bg-transparent">
                <div className="card mt-3 bg-dark text-light">
                    <div className="card-header">
                        <h2 className="card-title mb-0">Ваші вподобайки:</h2>
                    </div>
                    <div className="card-body">
                        <div className="row mb-3">
                            {
                                
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;