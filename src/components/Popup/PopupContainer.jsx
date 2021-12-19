import CenterContent from '../Page/CenterContent';
import './PopupContainer.css'

const PopupContainer = (props) => {

  return (
    <CenterContent>
      <div className='PopupDiv'>
        {props.title && <h1>{props.title}</h1>}
        {props.children}
      </div>
    </CenterContent>
  );
}

export default PopupContainer;