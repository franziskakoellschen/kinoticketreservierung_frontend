
import React, { isValidElement, useState } from 'react';
import Field from '../components/Input/TextField';
import PopupContainer from '../components/Popup/PopupContainer';
import Page from '../components/Page/Page';
import PopupContinueButton from '../components/Popup/PopupContinueButton';
import { register } from '../api';
import PopupMessage from '../components/Popup/PopupMessage';
import { useNavigate } from 'react-router-dom';
import { ValidationHelper } from '../util/ValidationHelper';


const Register = ({ desiredUsername }) => {
  const [username, setUsername] = useState(desiredUsername);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  const onRegisterButtonPress = () => {
    async function fetchMyAPI() {
      try {
        await register(username, email, password)
        setRegistered(true);
      } catch (error) {
        if (error.response.data.message) {
          alert(error.response.data.message)
        } else {
          alert("Error")
        }
      }
    }

    if (ValidationHelper.mailNotVailid(email)) {
      alert("Ungültige Email. Bitte überprüfen Sie ihre Eingabe.")
    } else {
      fetchMyAPI();
    }
  }

  const onLoginClick = () => {
    navigate("/login")
  }

  if (registered) {
    return (
      <Page>
        <PopupContainer>
          <h1>Erfolgreich. Emails prüfen und Konto aktivieren.</h1>
          <PopupContinueButton onClick={onLoginClick}>Zum Login</PopupContinueButton>
        </PopupContainer>
      </Page>
    )
  }

  return (
    <Page>
      <PopupContainer title="Registrierung">
        <Field label="Benutzername" value={username} setInputValue={setUsername} />
        <Field label="Email Adresse" setInputValue={setEmail} />
        <Field label="Password" type="password" setInputValue={setPassword} />
        <PopupContinueButton onClick={onRegisterButtonPress}>Registrieren</PopupContinueButton>
      </PopupContainer>
    </Page>
  );
};

export default Register;