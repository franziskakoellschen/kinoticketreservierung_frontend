import './CheckoutContainer.css';
import Page from '../Page/Page';
import React, { useState, useEffect } from 'react';
import CenterContent from '../Page/CenterContent';
import Field from '..//Input/TextField';
import BookingSummary from './BookingSummary';


const CheckoutContainer = ({selectedSeats, filmShowId, response}) => {
   

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
  

  return (
 <Page>
  <CenterContent >
<div className="floatingContainer">   
  <h1 id="showsHeader">Buchungsabschluss</h1>
  <div id="OuterContainer">
  <div className='CheckoutContainer'>
    <h1 class="invoiceHeader">Rechnungsadresse</h1>
    <div id='NameFields'>
    <Field  locked={false} focused={false} label={'Vorname'} margin={"2%"} marginBottom={"2%"} setInputValue={setSurnameInputValue} 
        error="falsche Eingabe" id={"SurnameInput"} wrongInput={surnameFormatIsWrong}/>
    <Field locked={false} focused={false} label={'Nachname'} margin={"2%"} marginBottom={"2%"} setInputValue={setNameInputValue}
         error="falsche Eingabe" id={"NameInput"} wrongInput={nameFormatIsWrong} />
    </div>
    <Field locked={false} focused={false}  label={'E-Mail'} marginTop={"2%"} marginBottom={"2%"} setInputValue={setEmailInputValue} 
        error="falsche Eingabe" id={"EmailInput"} wrongInput={emailFormatIsWrong}/>
    <div id='AddressFields'>
    <div id="field1"> <Field locked={false} focused={false}  label={'Straße'} margin={"2%"} marginTop={"2%"} marginBottom={"2%"} 
        setInputValue={setStreetInputValue} error="Straße eingeben" id={"AddressInput"} wrongInput={streetFormatIsWrong}/> </div>
    <div id="field2"> <Field locked={false} focused={false}  label={'Hnr'} margin={"2%"} marginTop={"7%"} marginBottom={"2%"} 
        setInputValue={setHouseNumberInputValue} error="Ungültig" id={"HausNrInput"} wrongInput={HouseNumberFormatIsWrong}/> </div>
    </div>
    <div id='CityFields'>
    <Field  locked={false} focused={false} label={'Postleitzahl'} margin={"2%"} marginBottom={"2%"} marginTop={"2%"} 
        setInputValue={setPostCodeInputValue} error="Ungültige Plz" id={"PostCodeInput"} wrongInput={postCodeFormatIsWrong}/>
    <Field locked={false} focused={false} label={'Stadt'} margin={"2%"} marginBottom={"2%"}  marginTop={"2%"} 
        setInputValue={setCityInputValue} error="Ungültiges Format" id={"CityInput"} wrongInput={cityFormatIsWrong}/>
    </div>
    <Field locked={false} focused={false}  label={'Telefonnummer'} marginTop={"2%"} marginBottom={"2%"} 
        setInputValue={setPhoneNumberInputValue} error="falsches Format" id={"PhoneNumberInput"} wrongInput={phoneNumberFormatIsWrong}/>
  </div>
  <BookingSummary selectedSeats={selectedSeats} filmShowId={filmShowId} response={response} 
        emailInputValue={emailInputValue} setEmailFormatIsWrong={setEmailFormatIsWrong} surnameInputValue={surnameInputValue} 
        setSurnameFormatIsWrong={setSurnameFormatIsWrong} nameInputValue={nameInputValue} setNameFormatIsWrong={setNameFormatIsWrong} 
        streetInputValue={streetInputValue} setStreetFormatIsWrong={setStreetFormatIsWrong} houseNumberInputValue={houseNumberInputValue} setHouseNumberFormatIsWrong={setHouseNumberFormatIsWrong} 
        postCodeInputValue={postCodeInputValue} setPostCodeFormatIsWrong={setPostCodeFormatIsWrong} cityInputValue={cityInputValue} setCityFormatIsWrong={setCityFormatIsWrong} 
        phoneNumberInputValue={phoneNumberInputValue} setPhoneNumberFormatIsWrong={setPhoneNumberFormatIsWrong} />
  </div>
  </div>
  </CenterContent>
  </Page>
    
  );
};

export default CheckoutContainer;