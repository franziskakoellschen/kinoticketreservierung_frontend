
import React, { useState } from 'react';
import Field from '../components/TextInput/Field';
import PopupContainer from '../components/Popup/PopupContainer';
import Page from '../components/Page/Page';
import PopupContinueButton from '../components/Popup/PopupContinueButton';


const Register = ({desiredEmail}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(desiredEmail);
  const [password, setPassword] = useState("");

  const onRegisterButtonPress = () => {
    alert("Registrierung")
  }

  return (
    <Page>
      <PopupContainer title="Registrierung">
        <Field label="Email Adresse" value={email} setInputValue={setEmail}/>
        <Field label="Password" type="password" setInputValue={setPassword}/>
        <Field label="Name" setInputValue={setName}/>
        <PopupContinueButton onClick={onRegisterButtonPress}>Registrieren</PopupContinueButton>
      </PopupContainer>
    </Page>
  );
};

export default Register;