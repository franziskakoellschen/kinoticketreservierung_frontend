import DatePickerInput from "./DatePickerInput";
import "./FilterBar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import  Nav  from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


const FilterBar = (props) => {

  
  
  return (
    <div id="OuterContainer">
      <DatePickerInput date={props.dateFrom} setDate={props.setDateFrom} text={"Von"}
      />
       <DatePickerInput date={props.dateTo} setDate={props.setDateTo} text={"Bis"}
      />
        <Nav>
         <NavDropdown
          id="nav-dropdown-dark-example"
          title="Genre"
          menuVariant="dark"
          color="white"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        </Nav>
      <button id="moreDetailButton" onClick={props.onClick}>Suchen</button>
    </div>
  );
}

export default FilterBar;