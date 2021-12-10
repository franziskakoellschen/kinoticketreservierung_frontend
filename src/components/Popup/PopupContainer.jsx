import './PopupContainer.css'

const PopupContainer = (props) => {

  return (
    <div className='PopupDiv'>
      {props.title && <h1>{props.title}</h1>}
      {props.children}
    </div>
  );
}

export default PopupContainer;