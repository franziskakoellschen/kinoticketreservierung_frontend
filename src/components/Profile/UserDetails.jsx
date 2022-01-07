import Field from '../Input/TextField';

const UserDetails = ({ user, changeMode }) => {

  let fieldNotSetMessage = "nicht gesetzt";
  console.log(user)

  return ( user && (
    <div style={{ background: "inherit", display:"flex"}}>
      <div style={{ background: "inherit", width:"50%"}}>
        <Field locked={changeMode} label={"Nutzername: " + (user.username || fieldNotSetMessage)}/>
        <Field locked={changeMode} label={"Vorname: " + (user.userAddress.surName || fieldNotSetMessage)}/>
        <Field locked={changeMode} label={"Nachname: " + (user.userAddress.lastName || fieldNotSetMessage)}/>
        <Field locked={changeMode} label={"E-Mail: " + (user.userAddress.emailAddress || fieldNotSetMessage)}/>
      </div>
      <div style={{ background: "inherit", width:"50%"}}>
        <Field locked={changeMode} locked={changeMode} label={"Straße: " + (user.userAddress.street || fieldNotSetMessage)}/>
        <Field locked={changeMode} label={"Hausnummer: " + (user.userAddress.houseNumber || fieldNotSetMessage)}/>
        <Field locked={changeMode} label={"Posleitzahl: " + (user.userAddress.postCode || fieldNotSetMessage)}/>
        <Field locked={changeMode} label={"Stadt: " + (user.userAddress.city || fieldNotSetMessage)}/>
        <Field locked={changeMode} label={"Telefonnummer: " + (user.userAddress.phoneNumber || fieldNotSetMessage)}/>
      </div>
    </div>
    )
  );
};

export default UserDetails;
