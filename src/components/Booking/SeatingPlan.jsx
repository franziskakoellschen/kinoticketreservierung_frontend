import Row from './Row'

const SeatingPlan = ({seatingPlan, toggleSeatSelected}) => {

    return (
        <div>
            {!seatingPlan && "Not available"}
            {seatingPlan.length === 0 && "Not available"}
            {seatingPlan.length !== 0 && seatingPlan.map((row, index) => {
                return <Row key={index} row={row} toggleSeatSelected={toggleSeatSelected}/>
            })}
        </div>
    );
}

export default SeatingPlan;