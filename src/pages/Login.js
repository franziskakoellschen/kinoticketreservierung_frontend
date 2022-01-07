
import React, { useState } from 'react';
import Field from '../components/Input/TextField';
import { isUserRegistered, login, signIn  } from '../api';
import { useNavigate } from 'react-router-dom';
import PopupContainer from '../components/Popup/PopupContainer';
import Page from '../components/Page/Page';
import PopupMessage from '../components/Popup/PopupMessage';
import PopupContinueButton from '../components/Popup/PopupContinueButton';


const Login = ({setUser, setdesiredUsername}) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginSuccess, setloginSuccess] = useState(
    JSON.parse(localStorage.getItem('user'))
    && JSON.parse(localStorage.getItem('user')).token
  );
  const [userRegistrationChecked, setUserRegistrationChecked] = useState(false);

  const onContinueButtonPress = () => {
    async function fetchMyAPI ()  {
      try {
        await isUserRegistered(email);
        setUserRegistrationChecked(true)
      } catch (error) {
        setdesiredUsername(email);
        navigate('/register');
      }
    }

    fetchMyAPI();
  }

  const onLoginButtonPress = () => {
    async function fetchMyAPI ()  {
      try {
        await login(email, password, setUser)
        console.log(JSON.parse(localStorage.getItem('user')));
        setloginSuccess(true);
      } catch (error) {
        alert("Wrong password");
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
        <Field label="Nutzername" setInputValue={setEmail}/>
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