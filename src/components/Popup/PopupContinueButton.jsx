import './PopupContinueButton.css'

const PopupContinueButton = (props) => {

  return (
    <button
        className='PopupContinueButton'
        onClick={props.onClick}
    >
        {props.children}
    </button>
  );
}

export default PopupContinueButton;