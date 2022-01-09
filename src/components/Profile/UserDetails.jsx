import Field from "../Input/TextField";

const UserDetails = ({
  user,
  changeMode,
  setSurname,
  setLastname,
  setStreet,
  setHouseNumber,
  setPostCode,
  setCity,
  setPhoneNumber,
  surnameFormatIsWrong,
  nameFormatIsWrong,
  streetFormatIsWrong,
  HouseNumberFormatIsWrong,
  postCodeFormatIsWrong,
  cityFormatIsWrong,
  phoneNumberFormatIsWrong,
}) => {

  let fieldNotSetMessage = "nicht gesetzt";

  return (
    user && (
      <div style={{ background: "inherit", display: "flex" }}>
        <div style={{ background: "inherit", width: "50%" }}>
          <Field
            id="username"
            locked={true}
            label={"Nutzername: " + (user.username || fieldNotSetMessage)}
          />
          <Field
            id="surname"
            setInputValue={setSurname}
            locked={changeMode}
            label={"Vorname: " + (user.address.surName || fieldNotSetMessage)}
            error="falsche Eingabe"
            wrongInput={surnameFormatIsWrong}
          />
          <Field
            id="lastname"
            setInputValue={setLastname}
            locked={changeMode}
            label={"Nachname: " + (user.address.lastName || fieldNotSetMessage)}
            error="falsche Eingabe"
            wrongInput={nameFormatIsWrong}
          />
          <Field
            id="email"
            locked={true}
            label={
              "E-Mail: " + (user.address.emailAddress || fieldNotSetMessage)
            }
          />
        </div>
        <div style={{ background: "inherit", width: "50%" }}>
          <Field
            id="street"
            setInputValue={setStreet}
            locked={changeMode}
            label={"Straße: " + (user.address.street || fieldNotSetMessage)}
            error="falsche Eingabe"
            wrongInput={streetFormatIsWrong}
          />
          <Field
            id="houseNumber"
            setInputValue={setHouseNumber}
            locked={changeMode}
            label={
              "Hausnummer: " + (user.address.houseNumber || fieldNotSetMessage)
            }
            error="falsche Eingabe"
            wrongInput={HouseNumberFormatIsWrong}
          />
          <Field
            id="postCode"
            setInputValue={setPostCode}
            locked={changeMode}
            label={
              "Posleitzahl: " + (user.address.postCode || fieldNotSetMessage)
            }
            error="falsche Eingabe"
            wrongInput={postCodeFormatIsWrong}
          />
          <Field
            id="city"
            setInputValue={setCity}
            locked={changeMode}
            label={"Stadt: " + (user.address.city || fieldNotSetMessage)}
            error="falsche Eingabe"
            wrongInput={cityFormatIsWrong}
          />
          <Field
            id="phoneNumber"
            setInputValue={setPhoneNumber}
            locked={changeMode}
            label={
              "Telefonnummer: " +
              (user.address.phoneNumber || fieldNotSetMessage)
            }
            error="falsche Eingabe"
            wrongInput={phoneNumberFormatIsWrong}
          />
        </div>
      </div>
    )
  );
};

export default UserDetails;
