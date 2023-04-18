import { useState } from "react";
import useUsers from "../../hooks/UsersHook";
import UpdateUserForm from "../../components/forms/UpdateUser";

const Account: React.FC<{}> = () => {
    const [error, setError] = useState('')
    const { currentUser } = useUsers();
    const birthday = new Date(currentUser.birthday).toLocaleDateString();

    const handleLogout = () => {
        localStorage.clear()
        window.location.href = "/"
    };

    return (
        <div className="container py-5">
            <div className="card">
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
                        <UpdateUserForm />
                        <button className="btn btn-danger" onClick={handleLogout}>
                            Вийти
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;