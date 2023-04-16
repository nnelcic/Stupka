import useCinemas from "../../hooks/CinemasHook";
import useHalls from "../../hooks/HallsHook";
import useSeats from "../../hooks/SeatsHook";
import Cinemas from "./Cinemas";
import Halls from "./Halls";
import Seats from "./Seats";

const CinemasManagement: React.FC<{}> = () => {
    const { showCinema, setShowCinema } = useCinemas();
    const { showHall, setShowHall, cinemaId, setCinemaId } = useHalls();
    const { showSeat, setShowSeat, hallId, setHallId } = useSeats();
    
    return (
        <div>
            {showCinema && <Cinemas setCinemaId={setCinemaId} setShowHall={setShowHall} setShowCinema={setShowCinema} />}
            {showHall && <Halls setHallId={setHallId} cinemaId={cinemaId} setShowSeat={setShowSeat} setShowHall={setShowHall} setShowCinema={setShowCinema} />}
            {showSeat && <Seats hallId={hallId} setShowSeat={setShowSeat} setShowHall={setShowHall} />}
        </div>
    );
};

export default CinemasManagement;
