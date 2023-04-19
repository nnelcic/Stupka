import { Button } from "react-bootstrap";
import Seat from "../../types/seatTypes/Seat";
import { useEffect } from "react";
import usePurchases from "../../hooks/PurchasesHook";
     
interface PurchaseTicketsProps {
    seats: Seat[];
    setSeatIds: (value: number[] | ((prevVar: number[]) => number[])) => void;
    seatIds: number[];
    addOrRemoveItemFromArray: (value: number) => void;
    seanseId: number;
}

const SeatsForPurchase: React.FC<PurchaseTicketsProps> = ({ seatIds, seanseId, addOrRemoveItemFromArray, seats }) => {
    var max = 0;
    const { freeSeats, getFreeSeats } = usePurchases();

    useEffect(() => {
        getFreeSeats(seanseId)
    }, [])

    const getColor = (color: string) => {
        return color === 'Normal'? 'success' : 
            color === 'ForDisablers' ? 'primary' :
            color === 'ForKissing' ? 'danger' : 'warning'
    }

    return (
        <div>
            {seats.sort((a, b) => {
                if(a.row > b.row) return 1; 
                if(a.row < b.row) return -1; 

                if(a.seatNumber > b.seatNumber) return 1; 
                if(a.seatNumber < b.seatNumber) return -1;

                return 1;
            }).map(x => {

            if (max < x.row) {
                max = x.row;
                return (
                    <>
                        <br />
                        <Button key={x.id} variant={freeSeats.some(e => e.id === x.id) !== true ? 'secondary' : 
                        getColor(x.seatType.type)} className={seatIds.some(e => e === x.id) === true ? 'p-2 m-1 border' : 'p-2 m-1'}
                        onClick={() => {
                            if(freeSeats.some(e => e.id === x.id)) {
                                addOrRemoveItemFromArray(x.id)
                            }
                        }}>{x.row}/{x.seatNumber}</Button>
                    </>
                );
            }

            return <Button key={x.id} variant={freeSeats.some(e => e.id === x.id) !== true ? 'secondary' : 
                getColor(x.seatType.type)} className={seatIds.some(e => e === x.id) === true ? 'p-2 m-1 border' : 'p-2 m-1'}
                onClick={() => {
                    if(freeSeats.some(e => e.id === x.id)) {
                        addOrRemoveItemFromArray(x.id)
                    }
                }}>{x.row}/{x.seatNumber}</Button>
            })}
        </div>
    )
};

export default SeatsForPurchase;