import Seat from "../seatTypes/Seat";

export default interface Hall {
    id: number;
    hallNumber: number;
    seats: Seat[]
}

export const defaultHall: Hall = {
    id: 0,
    hallNumber: 0,
    seats: []
}