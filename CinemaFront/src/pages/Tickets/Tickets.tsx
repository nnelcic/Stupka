import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Purchase from "./Purchase";

export interface IPurchase {
    id: number;
    price: number;
    promocode: string;
    purchaseDate: string;
    userDetailsId: number;
    tickets: ITicket[];
}

export interface ITicket {
    id: number;
    price: number;
    seanse: ISeanse;
    seat: ISeat;
}

export interface ISeanse {
    id: number;
    hallId: number;
    startTime: string;
    movie: IMovie;
    price: IPrice;
}

export interface ISeat {
    id: number;
    row: number;
    seatNumber: number;
    seatType: ISeatType;
}

export interface IMovie {
    id: number;
    duration: number;
    originalTitle: string;
    posterUrl: string;
    releaseDate: string;
    title: string;
}

export interface IPrice {
    id: number;
    cost: number;
}

export interface ISeatType {
    id: number;
    price: number;
    type: string;
}

const Tickets: React.FC<{}> = () => {
    const [purchase, setPurchase] = useState<IPurchase[]>([]);

    async function fetchProducts() {
        const response = await axios.get<IPurchase[]>("https://localhost:7282/api/purchase/user/1");
        setPurchase(response.data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    

    return (
        <div>
            {
            purchase && 
                <Container>
                    {purchase.map(x => <Purchase purchase={x} key={x.id} />)}
                </Container>
            }
        </div>
    );
};

export default Tickets;
