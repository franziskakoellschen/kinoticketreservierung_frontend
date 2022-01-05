
import React, { useState } from 'react';
import Field from '../components/Input/TextField';
import PopupContainer from '../components/Popup/PopupContainer';
import Page from '../components/Page/Page';
import PopupContinueButton from '../components/Popup/PopupContinueButton';
import { register } from '../api';
import PopupMessage from '../components/Popup/PopupMessage';


const Register = ({desiredUsername}) => {
  const [username, setUsername] = useState(desiredUsername);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  const onRegisterButtonPress = () => {
    async function fetchMyAPI ()  {
      try {
        await register(username, email, password)
        setRegistered(true);
      } catch (error) {
        alert("ERROR");
      }
    }

    fetchMyAPI();
  }

  
  if (registered) {
    return (
      <Page>
        <PopupMessage>
          Erfolgreich registriert! 
        </PopupMessage>
      </Page>
    )
  }

  return (
    <Page>
      <PopupContainer title="Registrierung">
        <Field label="Benutzername" value={username} setInputValue={setUsername}/>
        <Field label="Email Adresse" setInputValue={setEmail}/>
        <Field label="Password" type="password" setInputValue={setPassword}/>
        <PopupContinueButton onClick={onRegisterButtonPress}>Registrieren</PopupContinueButton>
      </PopupContainer>
    </Page>
  );
};

export default Register;