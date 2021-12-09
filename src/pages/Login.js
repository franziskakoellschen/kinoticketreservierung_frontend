
import React, { useState } from 'react';
import Field from '../components/TextInput/Field';
import { isUserRegistered, signIn  } from '../api';
import { useNavigate } from 'react-router-dom';
import PopupContainer from '../components/Popup/PopupContainer';
import Page from '../components/Page/Page';
import PopupMessage from '../components/Popup/PopupMessage';
import PopupContinueButton from '../components/Popup/PopupContinueButton';


const Login = ({setIsLoggedIn}) => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setloginSuccess] = useState(false);
  const [userIsRegistered, setUserIsRegistered] = useState(false);
  const navigate = useNavigate();

  const onContinueButtonPress = () => {
    async function fetchMyAPI ()  {
      let answer = await isUserRegistered(userName);
  
      if (answer) {
        // switch to password input
        setUserIsRegistered(true)
      } else {
        navigate('/register')
      }}

    fetchMyAPI();
  }

  const onLoginButtonPress = () => {
    async function fetchMyAPI ()  {
      let answer = await signIn(userName, password);
  
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
        {
          userIsRegistered && <Field label="Password" type="password" setInputValue={setPassword}/>
        } {
          !userIsRegistered && <Field label="Email Adresse" setInputValue={setUserName}/>
        }
        {
          userIsRegistered && <PopupContinueButton onClick={onLoginButtonPress}>Login</PopupContinueButton>
        } {
          !userIsRegistered && <PopupContinueButton onClick={onContinueButtonPress}>Weiter</PopupContinueButton>
        }
      </PopupContainer>
    </Page>
  );
};

export default Login;