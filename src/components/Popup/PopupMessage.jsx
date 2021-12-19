import './PopupMessage.css'
import CenterContent from '../Page/CenterContent';

const PopupMessage = (props) => {

  return (
    <CenterContent>
      <div className='PopupMessageDiv'>
          <h1 className='Message'>
              {props.children}
          </h1>
      </div>
    </CenterContent>
  );
}

export default PopupMessage;