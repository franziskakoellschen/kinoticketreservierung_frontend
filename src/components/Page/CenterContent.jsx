import './CenterContent.css'

const CenterContent = (props) => {

  return (
    <div className='CenterContent'>
      {props.children}
    </div>
  );
}

export default CenterContent;