
import React, { useState } from 'react';
import Field from '../components/Input/TextField';
import { isUserRegistered, signIn  } from '../api';
import { useNavigate } from 'react-router-dom';
import PopupContainer from '../components/Popup/PopupContainer';
import Page from '../components/Page/Page';
import PopupMessage from '../components/Popup/PopupMessage';
import PopupContinueButton from '../components/Popup/PopupContinueButton';


const Login = ({setIsLoggedIn, setDesiredEmail}) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginSuccess, setloginSuccess] = useState(false);
  const [userRegistrationChecked, setUserRegistrationChecked] = useState(false);

  const onContinueButtonPress = () => {
    async function fetchMyAPI ()  {
      let answer = await isUserRegistered(email);
  
      if (answer) {
        // switch to password input
        setUserRegistrationChecked(true)
      } else {
        setDesiredEmail(email);
        navigate('/register');
      }}

    fetchMyAPI();
  }

  const onLoginButtonPress = () => {
    async function fetchMyAPI ()  {
      let answer = await signIn(email, password);
  
      if (answer) {
        setIsLoggedIn(true);
        setloginSuccess(true);
      } else {
        alert("wrong password")
      }}

    fetchMyAPI();
  }

  if (loginSuccess) {
    return (
      <Page>
        <PopupMessage>
          Login erfolgreich!
        </PopupMessage>
      </Page>
    )
  }

  return (
    <Page>
      <PopupContainer title="Herzlich Willkommen bei THEATERY">
        <Field label="Email Adresse" setInputValue={setEmail}/>
        {userRegistrationChecked && (
          <>
            <Field label="Password" type="password" setInputValue={setPassword}/>
            <PopupContinueButton onClick={onLoginButtonPress}>Login</PopupContinueButton>
          </>)}
        {
          !userRegistrationChecked && <PopupContinueButton onClick={onContinueButtonPress}>Weiter</PopupContinueButton>
        }
      </PopupContainer>
    </Page>
  );
};

export default Login;