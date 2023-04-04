import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "./styles.css";

interface Cinema {
    name: string;
    address: string;
    city: string;
    email: string;
    phoneNumber: string;
    halls: Hall[];
}

interface Hall {
    hallNumber: number;
    seats: Seat[];
}

interface Seat {
    seatNumber: string;
    row: string;
    seatType: "default" | "forKisses" | "forDisablers";
}

const AddCinema = () => {
    const [cinema, setCinema] = useState<Cinema>({
        name: "",
        address: "",
        city: "",
        email: "",
        phoneNumber: "",
        halls: [],
    });

    const [hall, setHall] = useState<Hall>({
        hallNumber: 1,
        seats: [],
    });

    const [seat, setSeat] = useState<Seat>({
        seatNumber: "",
        row: "",
        seatType: "default",
    });

    const addCinema = () => {
        console.log(cinema);
    };

    const addHall = () => {
        // TODO: validate hall fields
        setCinema((prevCinema) => ({
            ...prevCinema,
            halls: [...prevCinema.halls, { ...hall }],
        }));
        setHall({ hallNumber: hall.hallNumber + 1, seats: [] });
        setSeat({ seatNumber: "", row: "", seatType: "default" });
    };

    const addSeat = () => {
        // TODO: validate seat fields
        setHall((prevHall) => ({
            ...prevHall,
            seats: [...prevHall.seats, { ...seat }],
        }));
        setSeat({ seatNumber: "", row: "", seatType: "default" });
    };

    return (
        <div className="container">
            <form>
                <div className="row mt-3 ms-4">
                    <h2>Add Cinema</h2>
                </div>

                <div className="row mb-3">
                    <label htmlFor="name">Name:</label>
                    <input className="col-sm-3"
                        type="text"
                        id="name"
                        onChange={(e) =>
                            setCinema({ ...cinema, name: e.target.value })
                        }
                        value={cinema.name}
                    />
                </div>

                <div className="row mb-3">
                    <label htmlFor="address">Address:</label>
                    <input className="col-sm-3"
                        type="text"
                        id="address"
                        onChange={(e) =>
                            setCinema({ ...cinema, address: e.target.value })
                        }
                        value={cinema.address}
                    />
                </div>
                
                <div className="row mb-3">
                    <label htmlFor="city">City:</label>
                    <input className="col-sm-3"
                        type="text"
                        id="city"
                        onChange={(e) =>
                            setCinema({ ...cinema, city: e.target.value })
                        }
                        value={cinema.city}
                    />
                </div>
                
                <div className="row mb-3">
                <label htmlFor="email">Email:</label>
                    <input className="col-sm-3"
                        type="email"
                        id="email"
                        onChange={(e) =>
                            setCinema({ ...cinema, email: e.target.value })
                        }
                        value={cinema.email}
                    />
                </div>

                <div className="row mb-3">
                <label htmlFor="phoneNumber">Phone Number:</label>
                    <input className="col-sm-3"
                        type="tel"
                        id="phoneNumber"
                        onChange={(e) =>
                            setCinema({ ...cinema, phoneNumber: e.target.value })
                        }
                        value={cinema.phoneNumber}
                    />
                </div>

                <div className="row mb-3">
                <Button className="col-sm-3" variant="dark" onClick={addHall}>Add Hall</Button>
                    <label htmlFor="hallNumber">Hall Number:</label>
                    <input className="col-sm-3"
                        type="number"
                        id="hallNumber"
                        onChange={(e) =>
                            setHall({
                                ...hall,
                                hallNumber: parseInt(e.target.value),
                            })
                        }
                        value={hall.hallNumber}
                    />
                </div>


                <div className="row mb-3">
                <Button className="col-sm-3" variant="dark" onClick={addSeat}>Add Seat</Button>
                    <label htmlFor="seatNumber">Seat Number:</label>
                    <input
                        className="col-sm-3"
                        type="text"
                        id="seatNumber"
                        onChange={(e) =>
                            setSeat({ ...seat, seatNumber: e.target.value })
                        }
                        value={seat.seatNumber}
                    />
                </div>

                <div className="row mb-3">
                    <label htmlFor="row">Row:</label>
                    <input
                        className="col-sm-3"
                        type="text"
                        id="row"
                        onChange={(e) => setSeat({ ...seat, row: e.target.value })}
                        value={seat.row}
                    />
                </div>

                <div className="row mb-3">
                    <label htmlFor="seatType">Seat Type:</label>
                    <select
                        className="col-sm-3"
                        id="seatType"
                        onChange={(e) =>
                            setSeat({
                                ...seat,
                                seatType: e.target.value as Seat["seatType"],
                            })
                        }
                        value={seat.seatType}
                    >
                        <option value="default">Default</option>
                        <option value="forKisses">For Kisses</option>
                        <option value="forDisablers">For Disablers</option>
                    </select>
                </div>
                
                {hall.seats.length > 0 && (
                    <>
                        <h4><Badge bg="warning">Seats:</Badge></h4>
                        <ul >
                            {hall.seats.map((s) => (
                                <li key={s.seatNumber}>
                                    Row {s.row}  - Seat number {s.seatNumber} - {s.seatType}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                
                {cinema.halls.length > 0 && (
                    <>
                        <h3><Badge bg="success">Halls:</Badge></h3>
                        <ul>
                            {cinema.halls.map((h) => (
                                <li key={h.hallNumber}>
                                    <h3><Badge bg="success">Hall {h.hallNumber}</Badge></h3>
                                    {h.seats.length > 0 && (
                                        <>
                                            <h4><Badge bg="warning">Seats:</Badge></h4>
                                            <ul>
                                                {h.seats.map((s) => (
                                                    <li key={s.seatNumber}>
                                                        {s.seatNumber} - {s.row} -{" "}
                                                        {s.seatType}
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                <div className="row mb-3">
                    <Button className="col-sm-3 mb-5" variant="dark" onClick={addCinema}>Add Cinema</Button>
                </div>
            </form>
        </div>
    );
};

export default AddCinema;
