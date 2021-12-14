import Seat from './Seat'

const Row = ({row, toggleSeatSelected}) => {

    return (
        <div style={{display: "flex"}}>
            {(!row || row.length === 0) && "Not available"}
            {row.length !== 0 && row.map((seat) => {
                return <Seat key={seat.seat.id} seat={seat} toggleSeatSelected={toggleSeatSelected}/>
            })}
        </div>
    );
}

export default Row;