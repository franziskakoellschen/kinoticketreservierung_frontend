import DatePickerInput from "./DatePickerInput";
import "./FilterBar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import  Nav  from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const FilterBar = (props) => {

  const  options = ["Acton" 
 ,  "Drama", "Horror" , "Science Fiction", "Comedy" ];

 function onChange(data) {
props.setGenre((data.value).toUpperCase());  
 } 
  
  return (
    <div id="OuterContainer">
      <DatePickerInput date={props.dateFrom} setDate={props.setDateFrom} text={"Von"}
      />
       <DatePickerInput date={props.dateTo} setDate={props.setDateTo} text={"Bis"}
      />
        <Dropdown 
        className='myClassName' 
        controlClassName='myControlClassName'
        placeholderClassName='myPlaceholderClassName'
        menuClassName='myMenuClassName'
        arrowClassName='myArrowClassName'
        options={options} onChange={onChange}   />;

        
      <button id="moreDetailButton" onClick={props.onClick}>Suchen</button>
    </div>
  );
}

export default FilterBar;