import React from "react";
import DatePicker from "react-datepicker"; //import reat-datepicker module
import "react-datepicker/dist/react-datepicker.css"; //import reat-datepicker css
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FiCalendar } from "react-icons/fi";//import calendar icon from reat-icon 
import{ useEffect, useState , forwardRef} from 'react';
import './DatePickerInput.css';


const style = {
    display: "flex", 
    justifyContent: "space-evenly", 
    height: "5rem",
    width: "30rem",
    paddingTop: "2rem"
}


const DatePickerInput = () => {

    const DatePickerCustomInput = (onClick) =>(<div id="imageDiv"><FiCalendar onClick={onClick} /></div>);

    const ExampleCustomInput = forwardRef(({ onClick }, ref) => (
        <FiCalendar onClick={onClick} ref={ref} />
      ));
    

const ref = React.createRef(); 

    const [selectedDate, setSelectedDate] = useState("");

    const handleSelectedDate = (date) => {
        setSelectedDate(date);
    }
    return (
        <div  style={style} >
        <span style={{color:"white"}}>Date:</span> {selectedDate ? selectedDate.toDateString() : "     "}
            <div> <DatePicker
                 selected={selectedDate}
                 onChange={handleSelectedDate}
                 customInput={<ExampleCustomInput />}
                 dateFormat="yyyy/MM/dd" 
             />
     </div>
     </div>
    );
}

export default DatePickerInput