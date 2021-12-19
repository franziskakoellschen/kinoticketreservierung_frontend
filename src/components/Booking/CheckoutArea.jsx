import './CheckoutArea.css';
import PopupContinueButton from '../Popup/PopupContinueButton';
import { reserveSeats } from '../../api';
import { useNavigate } from 'react-router-dom';


const CheckoutArea = ({selectedSeats, filmShowId}) => {

  const navigate = useNavigate();

  const onButtonClick = () => {
    async function postToApi()  {
        await reserveSeats(selectedSeats, filmShowId)
          .then((response) => {
            console.log(response);
            navigate('/checkout', { state: {response: response, selectedSeats: selectedSeats, filmShowId:filmShowId}});
         
          })
          .catch((reason) => {
            alert("Fehlgeschlagen! Sitze konnten nicht ausgewählt werden");
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