import './Register.css'

import React, { useState } from 'react';
import Field from '../components/TextInput/Field';
import PopupContainer from '../components/Popup/PopupContainer';
import Page from '../components/Page/Page';


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegisterButtonPress = () => {
    alert("register")
  }

  return (
    <Page>
      <PopupContainer>
        <h1 className='RegisterHeader'>Registrierung</h1>
          <div style={{margin: "5%"}}>
            <Field label="Email Adresse" setInputValue={setEmail}/>
          </div>
          <div style={{margin: "5%"}}>
            <Field label="Password" type="password" setInputValue={setPassword}/>
          </div>
          <div style={{margin: "5%"}}>
            <Field label="Name" setInputValue={setName}/>
          </div>
        <button className='RegisterButton' onClick={onRegisterButtonPress}>Register</button>
      </PopupContainer>
    </Page>
  );
};

export default Register;