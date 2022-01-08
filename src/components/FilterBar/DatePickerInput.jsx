import React from "react";
import DatePicker from "react-datepicker"; //import reat-datepicker module
import "react-datepicker/dist/react-datepicker.css"; //import reat-datepicker css
import { FiCalendar } from "react-icons/fi";//import calendar icon from reat-icon 
import{ useEffect, useState , forwardRef} from 'react';
import './DatePickerInput.css';
import * as moment from 'moment';
import 'moment/locale/de';
import { registerLocale, setDefaultLocale } from  "react-datepicker";


const DatePickerInput = (props) => {
    
    const ExampleCustomInput = forwardRef(({ onClick }, ref) => (
        <FiCalendar onClick={onClick} ref={ref} />
      ));
    
      useEffect(() => {
        moment.locale('de');  

    })
     
    const [selectedDate1, setSelectedDate1] = useState("");


    const handleSelectedDate1 = (date) => {
        
        setSelectedDate1(date);
        props.setDate(date);
    }

    return (
       <div id="outerContainer"> 
       <div id="dateFilterInput">
        <span id="dateText"> {props.text}:</span> <span id="dateText">{selectedDate1 ? moment(selectedDate1).format("MMM Do YY"): "-"}</span>
            <div> <DatePicker
                 selected={selectedDate1}
                 onChange={handleSelectedDate1}
                 customInput={<ExampleCustomInput />}
                 dateFormat="yyyy/MM/dd" 
                 locale="de"
             />
     </div>
     </div>
    </div>
    );
}

export default DatePickerInput