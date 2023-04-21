import useUsers from "../../hooks/UsersHook";
import UpdateUserForm from "../../components/forms/UpdateUser";
import image from "../../assets/Main.png";
import useMovie from "../../hooks/MovieHook";
import { Button, Card, CardGroup, Form, Stack } from "react-bootstrap";
import http from "../../http-common";
import useReviews from "../../hooks/ReviewHook";
import { useNavigate } from "react-router-dom";

const Account: React.FC<{}> = () => {
    const { currentUser } = useUsers();
    const { favouriteMovies, errorMessage } = useMovie();
    const { reviewsByUser } = useReviews()
    const navigate = useNavigate();
    const birthday = new Date(currentUser.birthday).toLocaleDateString();

    const handleLogout = () => {
        localStorage.clear()
        window.location.href = "/"
    };

    async function handleDelete(movieId: number) {
        await http.delete(`/favourites/${currentUser.id}&${movieId}`)
        window.location.href="/account"
    }

    async function deleteComment(reviewId: number) {
        await http.delete(`/reviews/${reviewId}`)
        window.location.href="/account"
    }
    
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
                            {favouriteMovies.length === 0 && <p>Вам поки що нічого не до вподоби</p>}
                            { favouriteMovies.map(item => (
                                <Card className="me-3 pt-3 pb-3 text-light bg-secondary" key={item.id} style={{ width: '10rem' }}>
                                    {errorMessage && <div>{errorMessage}</div>}
                                    <Card.Img className="cursor-state" onClick={() => navigate(`/movies/singlemovie/${item.id}`)}
                                    variant="top" src={item.posterUrl} />
                                    <Card.Body>
                                        <Card.Title className="cursor-state" onClick={() => navigate(`/movies/singlemovie/${item.id}`)}>
                                            {item.originalTitle}
                                        </Card.Title>
                                        <Card.Text className="cursor-state" onClick={() => navigate(`/movies/singlemovie/${item.id}`)}>
                                            {item.title}
                                        </Card.Text>
                                    </Card.Body>
                                    <Button type="submit" variant="outline-danger" className="text-light" size="sm"
                                        onClick={() => handleDelete(item.id)}>
                                        Видалити з вподобайок
                                    </Button>
                                </Card>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-2 py-5 bg-transparent">
                <div className="card mt-3 bg-dark text-light">
                    <div className="card-header">
                        <h2 className="card-title mb-0">Ваші коментарі:</h2>
                    </div>
                    <div className="card-body">
                        <div className="row mb-3">
                            { reviewsByUser.length === 0 && <p>У Вас ще немає коментарів</p> }
                            { reviewsByUser.map(item => (
                                <Card className="mt-3 px-3 text-light bg-secondary" key={item.id}>
                                    <CardGroup>
                                        <Form.Label className="me-3">Коментар:</Form.Label>
                                        <Form.Text className="text-light">{item.description}</Form.Text>
                                    </CardGroup>
                                    <CardGroup className="pt-3 pb-3 w-25">
                                        <Stack direction="horizontal" gap={3}>
                                            <div>
                                                <Form.Label className="me-3">Оцінка:</Form.Label>
                                                <Form.Text className="text-light">{item.rate}</Form.Text>
                                            </div>
                                            <div className="float-right">
                                                <Button onClick={() => deleteComment(item.id)} variant="outline-danger">Видалити</Button>
                                            </div>
                                        </Stack>
                                    </CardGroup>
                                </Card>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-2 py-5 bg-transparent">
            </div>
        </div>
    );
};

export default Account;