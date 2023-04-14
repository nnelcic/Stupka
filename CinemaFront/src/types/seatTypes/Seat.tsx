import { SeatType } from "./SeatType";

export interface Seat {
    id: number;
    row: number;
    seatNumber: number;
    seatType: SeatType;
}