import './BookingSummary.css';
import { BsCaretDown , BsCaretUp } from "react-icons/bs";
import Field from '../Input/TextField';
import React, { useState, useEffect } from 'react';
import { getCoupon, setBooking } from '../../api';
import { useNavigate } from 'react-router-dom';

const BookingSummary = (props) => {

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const [agreedTermsAndConditions, setAgreedTermsAndConditions] = useState(false);
    const [totalSumBrutto, setTotalSumBrutto] = useState(0);
    const [couponInputValue, setCouponInputValue] = useState();
    const [couponFormatIsWrong, setCouponFormatIsWrong] = useState(false);
    const [discountAmount, setDiscountAmount] = useState(0);
    const navigate = useNavigate();

    const [ticketSummaryOpen, setTicketSummaryOpen] = useState(false);
    const [cuponInputOpen, setCuponInputOpen] = useState(false);
    const [summaryOpen, setSummaryOpen] = useState(true);

    function mailNotVailid(inputValue) {
        if (emailRegex.test(inputValue)) {
            return false;
        } else {
            return true;
        }
    }

    useEffect(() => {
        var selectedSeats = props.selectedSeats;
        console.log(selectedSeats);

        setTotalSumBrutto(0);
        var totalSum = 0;
        selectedSeats.forEach(seat => {            
            totalSum = totalSum + seat.price;
        }, []);

        setTotalSumBrutto(totalSum);
    }, [setTotalSumBrutto])

    function couponNotValid() {

        if (couponInputValue === undefined) {
            setCouponFormatIsWrong(false);
        } else {
            async function fetchApi() {
                await getCoupon(couponInputValue)
                    .then((response) => {
                        setDiscountAmount(response.discount);
                        console.log('Valid');
                        setCouponFormatIsWrong(false);
                    })
                    .catch((reason) => {
                        setCouponFormatIsWrong(true);
                        console.log('Not valid');
                        setDiscountAmount(0);
                    });
            }
            fetchApi();
        }
    }


    function alphanunericInputNotValid(inputValue) {
        if (isAlphaNumeric(inputValue) && inputValue.length > 0) {
            return false;
        }
        else {
            return true;
        }
    }

    function isAlphaNumeric(str) {
        var code, i, len;
        if (str === undefined) return false;
        for (i = 0, len = str.length; i < len; i++) {
            code = str.charCodeAt(i);
            if ( // numeric (0-9)
                !(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123) && !(code === 32) ) {
                // lower alpha (a-z)
                return false;
            }
        }
        return true;
    };

    function houseNumberNotValid(str) {
        var code, i, len;
        if (str === undefined) return true;
        for (i = 0, len = str.length; i < len; i++) {
            code = str.charCodeAt(i);
            if (!(code > 47 && code < 58) && // numeric (0-9)
                !(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123) && // lower alpha
                !(code === 32) // spcae
                && !(code === 46)) { // .
                return true;
            }
        }
        return false;
    }
    function postCodeNotValid(str) {
        var code, i, len;
        if (str === undefined) return true;
        if (str.length !== 5) return true;
        for (i = 0, len = str.length; i < len; i++) {
            code = str.charCodeAt(i);
            if (!(code > 47 && code < 58) && !(code === 32)) {
                return true;
            }
        }
        return false;
    };

    function phoneNumberNotValid(str) {
        var code, i, len;
        if (str === undefined) return false; //Die Möglichkeit geben keine Handynummer
        for (i = 0, len = str.length; i < len; i++) {
            code = str.charCodeAt(i);
            if (!(code > 47 && code < 58) //0-9 ) {
                && !(code === 32) // blank
                && !(code === 43) // +
                && !(code === 47)) {
                return true;
            }
        }
        return false;
    }

    function onClick() {

        var wrongInputFields = '';

        props.setEmailFormatIsWrong(mailNotVailid(props.emailInputValue));
        props.setNameFormatIsWrong(alphanunericInputNotValid(props.nameInputValue));
        props.setSurnameFormatIsWrong(alphanunericInputNotValid(props.surnameInputValue));
        props.setStreetFormatIsWrong(alphanunericInputNotValid(props.streetInputValue));
        props.setHouseNumberFormatIsWrong(houseNumberNotValid(props.houseNumberInputValue));
        props.setPostCodeFormatIsWrong(postCodeNotValid(props.postCodeInputValue));
        props.setCityFormatIsWrong(alphanunericInputNotValid(props.cityInputValue));
        props.setPhoneNumberFormatIsWrong(phoneNumberNotValid(props.phoneNumberInputValue));


        console.log(props.streetInputValue === '');

        if (mailNotVailid(props.emailInputValue) || alphanunericInputNotValid(props.nameInputValue) || phoneNumberNotValid(props.phoneNumberInputValue) || alphanunericInputNotValid(props.surnameInputValue) || alphanunericInputNotValid(props.streetInputValue) || houseNumberNotValid(props.houseNumberInputValue) || postCodeNotValid(props.postCodeInputValue) || alphanunericInputNotValid(props.cityInputValue) || alphanunericInputNotValid(props.cityInputValue) || !agreedTermsAndConditions) {

            if (mailNotVailid(props.emailInputValue)) {

                if (wrongInputFields !== '') {
                    wrongInputFields = wrongInputFields + ',';

                }
                wrongInputFields = wrongInputFields + ' E-Mail';
            }

            if (alphanunericInputNotValid(props.nameInputValue)) {
                if (wrongInputFields !== '') {
                    wrongInputFields = wrongInputFields + ',';
                }
                wrongInputFields = wrongInputFields + ' Name';

            }

            if (alphanunericInputNotValid(props.surnameInputValue)) {
                if (wrongInputFields !== '') {
                    wrongInputFields = wrongInputFields + ',';
                }
                wrongInputFields = wrongInputFields + ' Vorname';

            }

            if (alphanunericInputNotValid(props.streetInputValue)) {
                if (wrongInputFields !== '') {
                    wrongInputFields = wrongInputFields + ',';
                }
                wrongInputFields = wrongInputFields + ' Straße';

            }

            if (houseNumberNotValid(props.houseNumberInputValue)) {
                if (wrongInputFields !== '') {
                    wrongInputFields = wrongInputFields + ',';
                }
                wrongInputFields = wrongInputFields + ' Hausnummer';

            }

            if (postCodeNotValid(props.postCodeInputValue)) {
                if (wrongInputFields !== '') {
                    wrongInputFields = wrongInputFields + ',';
                }
                wrongInputFields = wrongInputFields + ' Postleitzahl';

            }

            if (alphanunericInputNotValid(props.cityInputValue) || props.cityInputValue === '') {
                if (wrongInputFields !== '') {
                    wrongInputFields = wrongInputFields + ',';
                }
                wrongInputFields = wrongInputFields + ' Stadt';

            }

            if (phoneNumberNotValid(props.phoneNumberInputValue)) {
                if (wrongInputFields !== '') {
                    wrongInputFields = wrongInputFields + ',';
                }
                wrongInputFields = wrongInputFields + ' Telefonnummer';

            }
            if (!agreedTermsAndConditions) {
                alert('Bitte aktzeptieren Sie die allgemeinen Geschäftsbedingungen');
            }
            else {
                alert("Bitte überprüfe folgende Felder: " + wrongInputFields);
            }


            wrongInputFields = '';

        } else {

            var bookingAddress = { surName: props.surnameInputValue, lastName: props.nameInputValue, emailAddress: props.emailInputValue, street: props.streetInputValue, houseNumber: props.houseNumberInputValue, ['postCode']: props.postCodeInputValue, ['city']: props.cityInputValue, ['phoneNumber']: props.phoneNumberInputValue }
            var bookingDto = { ['filmShowID']: props.filmShowId, ['filmShowSeatList']: props.selectedSeats, ['isPaid']: true, ['totalSum']: totalSumBrutto - discountAmount, ['bookingAddress']: bookingAddress }
            console.log(bookingDto);

            async function postToApi() {
                await setBooking(bookingDto)
                    .then((response) => {
                        alert('Buchung erfolgreich!');
                        navigate('/program');
                    })
                    .catch((reason) => {
                        if (reason.response.status === 400) {
                            alert('Buchung fehlgeschlagen: Bad Request (400)');
                        } else if (reason.response.status === 409) {
                            alert('Buchung fehlgeschlagen: Zeitfenster überschritten (409)');
                        } else {
                            alert(reason.response.status);
                        }
                    });
            }
            postToApi();
        }
    }

    function onChange() {
        setAgreedTermsAndConditions(!agreedTermsAndConditions);
    }

    function onToggleTicketSummary() {
        setTicketSummaryOpen( !ticketSummaryOpen );
    }

    function onToggleCuponInput() {
        setCuponInputOpen( !cuponInputOpen );
    }

    function onToggleSummary() {
        setSummaryOpen( !summaryOpen );
    }

    return (
        <div className="outerClass">
            <div className="headContainer">
                <div id="firstRow"><h1 id="ticketSummaryHeader">Ticketzusammenfasung</h1>
                    <button type='button' className='toggle firstToggle' onClick={onToggleTicketSummary}> 
                        {ticketSummaryOpen ? <BsCaretUp /> : <BsCaretDown />} 
                    </button>
                </div>
                { ticketSummaryOpen &&  <div id="ticketCount">{props.selectedSeats.length} {props.selectedSeats.length > 1 ? 'Tickets' : 'Ticket'}</div>}
            </div>
            <div className="couponContainer">
                
                <div id="firstRow">
                    <h1 id="cuponHeader">Gutscheincode</h1>
                    <button type='button' className='toggle secondToggle' onClick={onToggleCuponInput}> 
                        {cuponInputOpen ? <BsCaretUp /> : <BsCaretDown />} 
                    </button>
                </div>
                { cuponInputOpen && <div id="couponInput"><Field locked={false} focused={false} label={'Gutscheincode'} setInputValue={setCouponInputValue} error="ungültiger Code" id={"CouponInput"} wrongInput={couponFormatIsWrong} />
                    <button id="checkoutButton" onClick={couponNotValid}>Gutschein anwenden</button>
                </div>}
            </div>
            <div className="summaryContainer">
                <div id="firstRow">
                    <h1 id="summaryHeader">Zusammenfassung</h1>
                    <button type='button' className='toggle thirdToggle' onClick={onToggleSummary}> 
                        {summaryOpen ? <BsCaretUp /> : <BsCaretDown />} 
                    </button>
                </div>
                { summaryOpen && <div className='summaryItemsContainer'>
                    <div id="firstRowSummary"><p id="subTotal">Zwischensumme</p><p id="subTotalSum">{totalSumBrutto} €</p></div>
                    <div id="firstRowSummary"><p id="subTotal">Rabatt</p><p id="subTotalSum">- {discountAmount} €</p></div>
                    <div id="firstRowSummary"><p id="subTotal">Versand</p><p id="subTotalSum">0 €</p></div>
                    <hr id="sumSeperator" />
                    <div id="firstRowSummary"><p id="totalSumP">Gesamtsumme</p><p id="totalSum">{totalSumBrutto - discountAmount} €</p></div>
                    <div id="firstRowSummary"><p id="subTotal">enthaltene Mehrwertssteuer</p><p id="totalSum">{(totalSumBrutto - discountAmount) * 0.19} €</p></div>
                </div>}
                <div id="couponInput"><Field locked={false} focused={false} label={'Kommentar'} /></div>
                <div id="firstRowSummary"> 
                    <input type="checkbox" id="agree" onChange={onChange} />
                    <p id="agb">Bitte akzeptieren Sie unsere <span id="agb1">Allgemeinen Geschäftsbedingungen</span></p>
                </div>
                <button id="checkoutButton" onClick={onClick}>Tickets buchen</button>
                <div />
            </div>
        </div>
    );
};

export default BookingSummary;