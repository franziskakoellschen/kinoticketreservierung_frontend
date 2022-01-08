import Field from '../Input/TextField';

const UserDetails = ({
  user,
  changeMode, 
  setSurname,
  setLastname,
  setStreet,
  setHouseNumber,
  setPostCode,
  setCity,
  setPhoneNumber
}) => {

  let fieldNotSetMessage = "nicht gesetzt";

  return ( user && (
    <div style={{ background: "inherit", display:"flex"}}>
      <div style={{ background: "inherit", width:"50%"}}>
        <Field id="username" locked={true} label={"Nutzername: " + (user.username || fieldNotSetMessage)}/>
        <Field id="surname" setInputValue={setSurname} locked={changeMode} label={"Vorname: " + (user.address.surName || fieldNotSetMessage)}/>
        <Field id="lastname" setInputValue={setLastname} locked={changeMode} label={"Nachname: " + (user.address.lastName || fieldNotSetMessage)}/>
        <Field id="email" locked={true} label={"E-Mail: " + (user.address.emailAddress || fieldNotSetMessage)}/>
      </div>
      <div style={{ background: "inherit", width:"50%"}}>
        <Field id="street" setInputValue={setStreet} locked={changeMode} label={"Straße: " + (user.address.street || fieldNotSetMessage)}/>
        <Field id="houseNumber" setInputValue={setHouseNumber} locked={changeMode} label={"Hausnummer: " + (user.address.houseNumber || fieldNotSetMessage)}/>
        <Field id="postCode" setInputValue={setPostCode} locked={changeMode} label={"Posleitzahl: " + (user.address.postCode || fieldNotSetMessage)}/>
        <Field id="city" setInputValue={setCity} locked={changeMode} label={"Stadt: " + (user.address.city || fieldNotSetMessage)}/>
        <Field id="phoneNumber" setInputValue={setPhoneNumber} locked={changeMode} label={"Telefonnummer: " + (user.address.phoneNumber || fieldNotSetMessage)}/>
      </div>
    </div>
    )
  );
};

export default UserDetails;
