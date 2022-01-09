import DatePickerInput from "./DatePickerInput";
import "./FilterBar.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import SearchInput from "./SearchInput";


const FilterBar = (props) => {


  const  optionsCategory = ["Action" 
 ,  "Drama", "Horror" , "Science Fiction", "Comedy" ];

 const  optionDimension = ["2D" , "3D"];

 const  optionLanguage = ["Deutsch" , "Englisch" , "Französisch", "Spanisch"];


 function onChangeGenre(data) {
    props.setGenre((data.value));  
 } 

 function onChangeLanguage(data) {
  props.setLanguage((data.value));  
   } 
 
 function onChangeDimension(data) {
  props.setDimension((data.value));  
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
        placeholder='Genre'
        placeholderClassName='myPlaceholderClassName'
        menuClassName='myMenuClassName'
        arrowClassName='myArrowClassName'
        options={optionsCategory} onChange={onChangeGenre}
        value={props.genre}   />;
        <Dropdown 
        className='myClassName' 
        controlClassName='myControlClassName'
        placeholder='Dimension'
        placeholderClassName='myPlaceholderClassName'
        menuClassName='myMenuClassName'
        arrowClassName='myArrowClassName'
        options={optionDimension} onChange={onChangeDimension}
        value={props.dimension}   />;
        <Dropdown 
        className='myClassName' 
        controlClassName='myControlClassName'
        placeholder='Sprache'
        placeholderClassName='myPlaceholderClassName'
        menuClassName='myMenuClassName'
        arrowClassName='myArrowClassName'
        options={optionLanguage} onChange={onChangeLanguage}
        value={props.dimension}   />
        <form adction="/" method="get" id="searchInput"  onSubmit>
        <input
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Filmtitel"
            name="s" 
          />
    </form>
      <button id="moreDetailButton" onClick={props.onClearFilter}>Filter aufheben</button>
      <button id="moreDetailButton" onClick={props.onClick}>Suchen</button>
     
    </div>
  );
}

export default FilterBar;