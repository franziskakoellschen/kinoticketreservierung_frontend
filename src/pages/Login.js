import './Login.css'

import React, { useState } from 'react';
import Field from '../components/TextInput/Field';
import { isUserRegistered, signIn  } from '../api';
import { useNavigate } from 'react-router-dom';



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
      <div className='LoginPageDiv'>
        <div className='LoginSuccessDiv'>
          <h1 className='Message'>Login erfolgreich!</h1>
        </div>
      </div>
    )
  }

  return (
    <div className='LoginPageDiv'>
      <div className='LoginDiv'>
        <h1 className='Message'>Herzlich Willkommen bei THEATERY</h1>
        <div style={{margin: "5%"}}>
          {
            userIsRegistered && <Field label="Password" type="password" setInputValue={setPassword}/>
          } {
            !userIsRegistered && <Field label="Email Adresse" setInputValue={setUserName}/>
          }
        </div>
        {
          userIsRegistered && <button className='ContinueAndLoginButton' onClick={onLoginButtonPress}>Login</button>
        } {
          !userIsRegistered && <button className='ContinueAndLoginButton' onClick={onContinueButtonPress}>Weiter</button>
        }
      </div>
    </div>
  );
};

export default Login;