import './CheckoutContainer.css';
import Page from '../Page/Page';
import React, { useState, useEffect } from 'react';
import CenterContent from '../Page/CenterContent';
import Field from '..//Input/TextField';
import BookingSummary from './BookingSummary';
import { setBooking } from '../../api';


const CheckoutContainer = ({selectedSeats, filmShowId, response}) => {
   
    const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const [emailInputValue ,setEmailInputValue] = useState();
    const [emailFormatIsWrong, setEmailFormatIsWrong] = useState(false);
    const [surnameInputValue ,setSurnameInputValue] = useState();
    const [surnameFormatIsWrong, setSurnameFormatIsWrong] = useState(false);
    const [nameInputValue ,setNameInputValue] = useState();
    const [nameFormatIsWrong, setNameFormatIsWrong] = useState(false);
    const [streetInputValue ,setStreetInputValue] = useState();
    const [streetFormatIsWrong, setStreetFormatIsWrong] = useState(false);
    const [houseNumberInputValue ,setHouseNumberInputValue] = useState();
    const [HouseNumberFormatIsWrong, setHouseNumberFormatIsWrong] = useState(false);
    const [postCodeInputValue ,setPostCodeInputValue] = useState();
    const [postCodeFormatIsWrong, setPostCodeFormatIsWrong] = useState(false);
    const [cityInputValue ,setCityInputValue] = useState();
    const [cityFormatIsWrong, setCityFormatIsWrong] = useState(false);
    const [phoneNumberInputValue ,setPhoneNumberInputValue] = useState();
    const [phoneNumberFormatIsWrong, setPhoneNumberFormatIsWrong] = useState(false);
  
 function checkRegEx(){
        console.log(surnameInputValue);
       
     /*  // setEmailFormatIsWrong(mailNotVailid(emailInputValue));
        setSurnameFormatIsWrong(alphanunericInputNotValid(surnameInputValue));
        setNameFormatIsWrong(alphanunericInputNotValid(nameInputValue));
        setStreetFormatIsWrong(streetInputValue === undefined);
        setHouseNumberFormatIsWrong(houseNumberNotValid(houseNumberInputValue));
        setPostCodeFormatIsWrong(postCodeNotValid(postCodeInputValue));
        setCityFormatIsWrong(alphanunericInputNotValid(cityInputValue));
        setPhoneNumberFormatIsWrong(phoneNumberNotValid(phoneNumberInputValue));

        if(emailFormatIsWrong || setSurnameFormatIsWrong || nameFormatIsWrong )
        
        var bookingAddress = {['surName']: surnameInputValue, ['lastName']: nameInputValue, ['emailAddress']: emailInputValue, ['street']:streetInputValue, ['houseNumber']: houseNumberInputValue, ['postCode']: postCodeInputValue, ['city']: cityInputValue, ['phoneNumber']:phoneNumberInputValue}
        var bookingDto = {['filmShowID']: filmShowId, ['filmShowSeatList']: selectedSeats, ['isPaid']: true, ['totalSum']: 22.0, ['bookingAddress']: bookingAddress}
        console.log(bookingDto);

        async function postToApi()  {
            await setBooking(bookingDto)
              .then((response) => {
                alert("Success! Refresh to see the change");
                
              })
              .catch((reason) => {
                console.log(reason);
              });
        }
        postToApi(); */
    }

useEffect(() => {
    console.log(filmShowId);
    console.log(response);
    console.log(selectedSeats);
   
},[])

function isAlphaNumeric(str) {
    var code, i, len;
    if(str === undefined) return false;
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if ( // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) {
             // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

 function phoneNumberNotValid(str){
    var code, i, len;
    if(str === undefined) return false; //Die Möglichkeit geben keine Handynummer
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if ( !(code > 47 && code < 58) //0-9 ) {
            && !(code === 32) // blank
            && !(code === 43) // +
            && !(code === 47)) {
                return true;
            }
              }
   return false; }
    


  function postCodeNotValid(str) {
    var code, i, len;
    if(str === undefined) return true;
    if(str.length !== 5) return true;
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if ( !(code > 47 && code < 58) ) { 
        return true;
      }
    }
    return false;
  };

function alphanunericInputNotValid(inputValue){
    if(isAlphaNumeric(inputValue) && inputValue.length > 0){
        return false;
    }
    else{
        return true;
    }
}

function houseNumberNotValid(str){
    var code, i, len;
    if(str === undefined) return true;
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123) && // lower alpha
          !(code === 32) // spcae
            && !(code === 46) ) { // .
        return true;
      }
    }
    return false;
}

function mailNotVailid(inputValue){
    if (emailRegex.test(inputValue)) { return false;
} else{
   return true;
}
}

  return (
 <Page>
  <CenterContent >
<div className="floatingContainer">   
  <h1 id="showsHeader">Buchungsabschluss</h1>
  <div id="OuterContainer">
  <div className='CheckoutContainer'>
    <h1 class="invoiceHeader">Rechnungsadresse</h1>
    <div id='NameFields'>
    <Field  locked={false} focused={false} label={'Vorname'} margin={"2%"} marginBottom={"2%"} setInputValue={setSurnameInputValue} error="falsche Eingabe" id={"SurnameInput"} wrongInput={surnameFormatIsWrong}/>
    <Field locked={false} focused={false} label={'Nachname'} margin={"2%"} marginBottom={"2%"} setInputValue={setNameInputValue} error="falsche Eingabe" id={"NameInput"} wrongInput={nameFormatIsWrong} />
    </div>
    <Field locked={false} focused={false}  label={'E-Mail'} marginTop={"2%"} marginBottom={"2%"} setInputValue={setEmailInputValue} error="falsche Eingabe" id={"EmailInput"} wrongInput={emailFormatIsWrong}/>
    <div id='AddressFields'>
    <div id="field1"> <Field locked={false} focused={false}  label={'Straße'} margin={"2%"} marginTop={"2%"} marginBottom={"2%"} setInputValue={setStreetInputValue} error="Straße eingeben" id={"AddressInput"} wrongInput={streetFormatIsWrong}/> </div>
    <div id="field2"> <Field locked={false} focused={false}  label={'Hnr'} margin={"2%"} marginTop={"7%"} marginBottom={"2%"} setInputValue={setHouseNumberInputValue} error="Ungültig" id={"HausNrInput"} wrongInput={HouseNumberFormatIsWrong}/> </div>
    </div>
    <div id='CityFields'>
    <Field  locked={false} focused={false} label={'Postleitzahl'} margin={"2%"} marginBottom={"2%"} marginTop={"2%"} setInputValue={setPostCodeInputValue} error="Ungültige Plz" id={"PostCodeInput"} wrongInput={postCodeFormatIsWrong}/>
    <Field locked={false} focused={false} label={'Stadt'} margin={"2%"} marginBottom={"2%"}  marginTop={"2%"} setInputValue={setCityInputValue} error="Ungültiges Format" id={"CityInput"} wrongInput={cityFormatIsWrong}/>
    </div>
    <Field locked={false} focused={false}  label={'Telefonnummer'} marginTop={"2%"} marginBottom={"2%"} setInputValue={setPhoneNumberInputValue} error="falsches Format" id={"PhoneNumberInput"} wrongInput={phoneNumberFormatIsWrong}/>
  </div>
  <BookingSummary selectedSeats={selectedSeats} filmShowId={filmShowId} response={response} emailInputValue={emailInputValue} setEmailFormatIsWrong={setEmailFormatIsWrong} surnameInputValue={surnameInputValue} setSurnameFormatIsWrong={setSurnameFormatIsWrong} nameInputValue={nameInputValue} setNameFormatIsWrong={setNameFormatIsWrong} streetInputValue={streetInputValue} setStreetFormatIsWrong={setStreetFormatIsWrong} houseNumberInputValue={houseNumberInputValue} setHouseNumberFormatIsWrong={setHouseNumberFormatIsWrong} postCodeInputValue={postCodeInputValue} setPostCodeFormatIsWrong={setPostCodeFormatIsWrong} cityInputValue={cityInputValue} setCityFormatIsWrong={setCityFormatIsWrong} setPhoneNumberFormatIsWrong={setPhoneNumberFormatIsWrong} />
  </div>
  </div>
  </CenterContent>
  </Page>
    
  );
};

export default CheckoutContainer;