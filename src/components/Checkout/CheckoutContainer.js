import './CheckoutContainer.css';
import Page from '../Page/Page';
import React, { useState, useEffect } from 'react';
import CenterContent from '../Page/CenterContent';
import Field from '..//Input/TextField';
import BookingSummary from './BookingSummary';
import { getUserInformation } from '../../api';


const CheckoutContainer = ({ selectedSeats, filmShowId, response }) => {


    const [emailInputValue, setEmailInputValue] = useState();
    const [emailFormatIsWrong, setEmailFormatIsWrong] = useState(false);
    const [surnameInputValue, setSurnameInputValue] = useState();
    const [surnameFormatIsWrong, setSurnameFormatIsWrong] = useState(false);
    const [nameInputValue, setNameInputValue] = useState();
    const [nameFormatIsWrong, setNameFormatIsWrong] = useState(false);
    const [streetInputValue, setStreetInputValue] = useState();
    const [streetFormatIsWrong, setStreetFormatIsWrong] = useState(false);
    const [houseNumberInputValue, setHouseNumberInputValue] = useState();
    const [HouseNumberFormatIsWrong, setHouseNumberFormatIsWrong] = useState(false);
    const [postCodeInputValue, setPostCodeInputValue] = useState();
    const [postCodeFormatIsWrong, setPostCodeFormatIsWrong] = useState(false);
    const [cityInputValue, setCityInputValue] = useState();
    const [cityFormatIsWrong, setCityFormatIsWrong] = useState(false);
    const [phoneNumberInputValue, setPhoneNumberInputValue] = useState();
    const [phoneNumberFormatIsWrong, setPhoneNumberFormatIsWrong] = useState(false);

    const isLoggedIn = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user && user.token)
    }

    const [userDetails, setUserDetails] = useState();

    useEffect(() => {
        async function fetchMyAPI() {
            try {
                let data = await getUserInformation();
                setUserDetails(data);
            } catch (error) {
                alert("Something went wrong!");
            }
        }
    
        if (isLoggedIn()) {
            fetchMyAPI();
        }
    });

    if (isLoggedIn() && !userDetails) return (
        <></>
    );

    return (
                <div className="floatingContainer">
                    <h1 id="showsHeader">Buchungsabschluss</h1>
                    <div id="OuterContainer">
                        <div className='CheckoutContainer'>
                            <h1 className="invoiceHeader">Rechnungsadresse</h1>
                            <div id='NameFields'>
                                <Field value={userDetails ? userDetails.userAddress.surName : ""} locked={false} focused={false} label={'Vorname'} margin={"2%"} marginBottom={"2%"} setInputValue={setSurnameInputValue}
                                    error="falsche Eingabe" id={"SurnameInput"} wrongInput={surnameFormatIsWrong} />
                                <Field value={userDetails ? userDetails.userAddress.lastName : ""} locked={false} focused={false} label={'Nachname'} margin={"2%"} marginBottom={"2%"} setInputValue={setNameInputValue}
                                    error="falsche Eingabe" id={"NameInput"} wrongInput={nameFormatIsWrong} />
                            </div>
                            <Field value={userDetails ? userDetails.userAddress.emailAddress : ""} locked={false} focused={false} label={'E-Mail'} marginTop={"2%"} marginBottom={"2%"} setInputValue={setEmailInputValue}
                                error="falsche Eingabe" id={"EmailInput"} wrongInput={emailFormatIsWrong} />
                            <div id='AddressFields'>
                                <div id="field1"> <Field value={userDetails ? userDetails.userAddress.street : ""} locked={false} focused={false} label={'Straße'} margin={"2%"} marginTop={"2%"} marginBottom={"2%"}
                                    setInputValue={setStreetInputValue} error="Straße eingeben" id={"AddressInput"} wrongInput={streetFormatIsWrong} /> </div>
                                <div id="field2"> <Field value={userDetails ? userDetails.userAddress.houseNumber : ""} locked={false} focused={false} label={'Hnr'} margin={"2%"} marginTop={"7%"} marginBottom={"2%"}
                                    setInputValue={setHouseNumberInputValue} error="Ungültig" id={"HausNrInput"} wrongInput={HouseNumberFormatIsWrong} /> </div>
                            </div>
                            <div id='CityFields'>
                                <Field value={userDetails ? userDetails.userAddress.postCode.toString() : ""} locked={false} focused={false} label={'Postleitzahl'} margin={"2%"} marginBottom={"2%"} marginTop={"2%"}
                                    setInputValue={setPostCodeInputValue} error="Ungültige Plz" id={"PostCodeInput"} wrongInput={postCodeFormatIsWrong} />
                                <Field value={userDetails ? userDetails.userAddress.city : ""} locked={false} focused={false} label={'Stadt'} margin={"2%"} marginBottom={"2%"} marginTop={"2%"}
                                    setInputValue={setCityInputValue} error="Ungültiges Format" id={"CityInput"} wrongInput={cityFormatIsWrong} />
                            </div>
                            <Field value={userDetails ? userDetails.userAddress.phoneNumber : ""} locked={false} focused={false} label={'Telefonnummer'} marginTop={"2%"} marginBottom={"2%"}
                                setInputValue={setPhoneNumberInputValue} error="falsches Format" id={"PhoneNumberInput"} wrongInput={phoneNumberFormatIsWrong} />
                            <div />
                        </div>
                        <BookingSummary selectedSeats={selectedSeats} filmShowId={filmShowId} response={response}
                            emailInputValue={emailInputValue} setEmailFormatIsWrong={setEmailFormatIsWrong} surnameInputValue={surnameInputValue}
                            setSurnameFormatIsWrong={setSurnameFormatIsWrong} nameInputValue={nameInputValue} setNameFormatIsWrong={setNameFormatIsWrong}
                            streetInputValue={streetInputValue} setStreetFormatIsWrong={setStreetFormatIsWrong} houseNumberInputValue={houseNumberInputValue} setHouseNumberFormatIsWrong={setHouseNumberFormatIsWrong}
                            postCodeInputValue={postCodeInputValue} setPostCodeFormatIsWrong={setPostCodeFormatIsWrong} cityInputValue={cityInputValue} setCityFormatIsWrong={setCityFormatIsWrong}
                            phoneNumberInputValue={phoneNumberInputValue} setPhoneNumberFormatIsWrong={setPhoneNumberFormatIsWrong} />
                    </div>
                </div>
    );
};

export default CheckoutContainer;