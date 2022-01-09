import React from "react";
import DatePicker , {registerLocale} from "react-datepicker"; //import reat-datepicker module
import "react-datepicker/dist/react-datepicker.css"; //import reat-datepicker css
import de from "date-fns/locale/de"; // the locale you want
import { FiCalendar } from "react-icons/fi";//import calendar icon from reat-icon 
import{ useEffect, useState , forwardRef} from 'react';
import './DatePickerInput.css';
import * as moment from 'moment';
import 'moment/locale/de';


const DatePickerInput = (props) => {
    
    const ExampleCustomInput = forwardRef(({ onClick }, ref) => (
        <FiCalendar onClick={onClick} ref={ref} />
      ));
    
      useEffect(() => {
        moment.locale('de');  
        registerLocale("de", de);

    })
     
    const [selectedDate1, setSelectedDate1] = useState("");


    const handleSelectedDate1 = (date) => {
        
        setSelectedDate1(date);
        props.setDate(date);
    }

    return (
       <div id="outerContainerdate"> 
       <div id="dateFilterInput">
        <span id="dateText"> {props.text}:</span> <span id="dateText">{props.date ? moment(props.date).format("MMM Do YY"): "-"}</span>
            <div> <DatePicker
                 selected={props.date}
                 onChange={handleSelectedDate1}
                 customInput={<ExampleCustomInput />}
                 dateFormat="yyyy/MM/dd" 
                 locale="de"
                 minDate={new Date()}

             />
     </div>
     </div>
    </div>
    );
}

export default DatePickerInput