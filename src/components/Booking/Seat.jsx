import { useState } from 'react';
import './Seat.css';

const Seat = ({seat, toggleSeatSelected}) => {

    const [selected, setSelected] = useState(false);

    const handleSeatClicked = () => {
       setSelected(!selected);
       toggleSeatSelected(seat);
    }

    if (seat.reserved) {
        return <div className="container">
            <div className="reserved" />
        </div>
    }

    return <div className="container" onClick={handleSeatClicked}>
        {!selected && <div className="notSelected" />}
        {selected && <div className="selected" />}
    </div>
}

export default Seat;