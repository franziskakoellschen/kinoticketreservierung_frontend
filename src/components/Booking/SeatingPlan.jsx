import Row from './Row'
import './Seat.css';

const SeatingPlan = ({seatingPlan, toggleSeatSelected}) => {

    return (
        <div className='SeatingplanContainer'>
            {!seatingPlan && "Not available"}
            {seatingPlan.length === 0 && "Not available"}
            {seatingPlan.length !== 0 && seatingPlan.map((row, index) => {
                return <Row key={index} row={row} toggleSeatSelected={toggleSeatSelected}/>
            })}
        </div>
    );
}

export default SeatingPlan;