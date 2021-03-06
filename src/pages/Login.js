
import React, { useState } from 'react';
import Field from '../components/Input/TextField';
import { isUserRegistered, login, signIn  } from '../api';
import { useNavigate } from 'react-router-dom';
import PopupContainer from '../components/Popup/PopupContainer';
import Page from '../components/Page/Page';
import PopupMessage from '../components/Popup/PopupMessage';
import PopupContinueButton from '../components/Popup/PopupContinueButton';
import { getUser, isLoggedIn } from '../util/UserHelper';


const Login = ({setUser, setdesiredUsername}) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginSuccess, setloginSuccess] = useState(isLoggedIn());
  const [userRegistrationChecked, setUserRegistrationChecked] = useState(false);

  const onPasswordForgottenPress = () => {
    navigate('/passwordForgotten')
  };

  const onContinueButtonPress = () => {
    async function fetchMyAPI ()  {
      try {
        await isUserRegistered(username);
        setUserRegistrationChecked(true)
      } catch (error) {
        setdesiredUsername(username);
        navigate('/register');
      }
    }

    fetchMyAPI();
  }

  const onLoginButtonPress = () => {
    async function fetchMyAPI ()  {
      try {
        await login(username, password, setUser);
        setloginSuccess(true);
      } catch (error) {
        if (error.response.status === 401) alert("Wrong password")
        else if (error.response.status === 423) alert("Account is disabled")
        else alert("Error: " + error.response.status)
      }
    }

    fetchMyAPI();
  }

  if (loginSuccess) {
    // check if redirected from booking process
    if (JSON.parse(localStorage.getItem("bookingState"))) {
      let state = JSON.parse(localStorage.getItem("bookingState"));
      localStorage.removeItem("bookingState");
      navigate("/checkout", {state: state})
    }

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
        <Field label="Nutzername" setInputValue={setUsername} />
        {userRegistrationChecked && (
          <>
            <Field label="Password" type="password" setInputValue={setPassword}/>
            <PopupContinueButton onClick={onLoginButtonPress}>Login</PopupContinueButton>
            <PopupContinueButton onClick={onPasswordForgottenPress}>Passwort vergessen</PopupContinueButton>
          </>)}
        {
          !userRegistrationChecked && <PopupContinueButton onClick={onContinueButtonPress}>Weiter</PopupContinueButton>
        }
      </PopupContainer>
    </Page>
  );
};

export default Login;
