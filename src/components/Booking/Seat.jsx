import { useState } from 'react';
import './Seat.css';

const Seat = ({seat, toggleSeatSelected}) => {

    const [selected, setSelected] = useState(false);

    const handleSeatClicked = () => {
       setSelected(!selected);
       toggleSeatSelected(seat);
    }

    if (seat.status != "FREE") {
        return <div className="containerSeat">
            <div className="reserved" />
        </div>
    }

    return <div className="containerSeat" onClick={handleSeatClicked}>
        {!selected && <div className="notSelected" />}
        {selected && <div className="selected" />}
    </div>
}

export default Seat;