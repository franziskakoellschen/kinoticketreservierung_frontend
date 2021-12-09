import './PopupMessage.css'

const PopupMessage = (props) => {

  return (
    <div className='PopupMessageDiv'>
        <h1 className='Message'>
            {props.children}
        </h1>
    </div>
  );
}

export default PopupMessage;