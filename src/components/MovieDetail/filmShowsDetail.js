import React, {useState ,useEffect} from 'react';
import './filmShowsDetail.css' ;
import { useNavigate } from 'react-router-dom';

const FilmShowsDetail = (props) => {

const [dayState, setDayState] = useState();
const [numericDayState, setNumericDayState] = useState();
const [monthState, setMonthState] = useState();
const [yearState, setYearState] = useState(); 
const [daysState, setDaysState] = useState(); 

    useEffect(() => {
      createDayContainer(props.passedDate);
    })

 const navigate = useNavigate();

function createDayContainer(day){
      
        var dayProp = day.substring(0,3);
        var monthProp = day.substring(4,7);
        setNumericDayState(day.substring(8,10));
        setYearState(day.substring(11,15));
        var dayFullText = "";
        var daySmallText = "";
        var monthFullText ="asd";
      
        switch (dayProp) {
          case 'Mon':
            daySmallText="Mo";
            break;
          case 'Tue':
            daySmallText="Di";
            break;
          case 'Wed':
            daySmallText ="Mi"; 
            break;
          case 'Thu':
            daySmallText ="Do"; 
            break;
          case 'Fri':
            daySmallText ="Fr"; 
            break;
          case 'Sat':
            daySmallText ="Sa"; 
            break;
          case 'Sun':
            daySmallText ="So"; 
            break;
        }

        setDaysState(daySmallText);

        switch (dayProp) {
          case 'Mon':
            dayFullText="Montag";
            break;
          case 'Tue':
            dayFullText="Dienstag";
            break;
          case 'Wed':
           dayFullText ="Mittwoch"; 
            break;
            case 'Thu':
           dayFullText ="Donnerstag"; 
            break;
            case 'Fri':
           dayFullText ="Freitag"; 
            break;
            case 'Sat':
            dayFullText ="Samstag"; 
               break;
               case 'Sun':
           dayFullText ="Sonntag"; 
            break;
        }

        setDayState(dayFullText);

        switch (monthProp) {
          case 'Jan':
            monthFullText="01";
            break;
          case 'Feb':
            monthFullText="02";
            break;
          case 'Mar':
           monthFullText ="03"; 
            break;
            case 'Apr':
            monthFullText ="04"; 
            break;
            case 'May':
            monthFullText ="05"; 
            break;
            case 'Jun':
            monthFullText ="06"; 
            break;
            case 'Jul':
            monthFullText ="07"; 
            break;
            case 'Aug':
            monthFullText ="08"; 
            break;
            case 'Sep':
            monthFullText ="09"; 
            break;
            case 'Oct':
            monthFullText ="10"; 
            break;
            case 'Nov':
            monthFullText ="11"; 
            break;
            case 'Dec':
            monthFullText ="12"; 
            break;
          
        }
        setMonthState(monthFullText);

      }

  return(
    <div id='show'>
    <div id="dayDescription">{dayState+ " " + numericDayState + "." + monthState + "." + yearState }</div>
    <div className="filmShowsDiv">
    {
      props.passedObject.map((filmShow) => {
        let date = new Date(filmShow.date).toLocaleDateString();
        let time = filmShow.time // TODO: parse Date from timestamp

        return (
            <div className="filmShowDiv" onClick={() => navigate("/booking/" + filmShow.id) }>
                <p id='p1'>{daysState} {date.substring(0,5)}</p>
                <p id='p2'>{time.substring(0,5)}</p>
                <p id='p3'>2D</p>
            </div>
        )})
    }
    </div></div>
      );

}


export default FilmShowsDetail;