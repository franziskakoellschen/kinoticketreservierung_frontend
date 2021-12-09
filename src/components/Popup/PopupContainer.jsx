import './PopupContainer.css'

const PopupContainer = (props) => {

  return (
    <div className='PopupDiv'>
      {props.children}
    </div>
  );
}

export default PopupContainer;