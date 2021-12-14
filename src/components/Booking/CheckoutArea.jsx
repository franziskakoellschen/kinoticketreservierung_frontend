import './CheckoutArea.css';
import PopupContinueButton from '../Popup/PopupContinueButton';
import { reserveSeats } from '../../api';

const CheckoutArea = ({selectedSeats, filmShowId}) => {

  const onButtonClick = () => {
    async function postToApi()  {
        let seats = [];
        selectedSeats.map((seat) => seats.push(seat.seat));
        console.log(seats)
        await reserveSeats(seats, filmShowId)
          .then((response) => {
            alert("Success! Refresh to see the change");
          })
          .catch((reason) => {
            alert("Error! Please refresh and try again");
          });
    }
    postToApi();
  }

  function compare(a, b) {
    if (a.seat.row < b.seat.row) {
      return -1;
    } else if (a.seat.row > b.seat.row) {
      return 1;
    } else {
      return (a.seat.seatNumber - b.seat.seatNumber);
    }
  }
  
  selectedSeats.sort(function(a, b) {
    return compare(a, b);
  });

  return (
    <div className='checkoutArea'>
      <ul>
        {selectedSeats.map(
          (seat) => {
            return (
              <li key={seat.seat.id}>Row {seat.seat.row}, Nr {seat.seat.seatNumber}</li>
            )
          }
        )}
      </ul>
      <PopupContinueButton onClick={onButtonClick}>Checkout</PopupContinueButton>
    </div>
  );
}

export default CheckoutArea;