import './Register.css'

import React, { useState } from 'react';
import Field from '../components/TextInput/Field';


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegisterButtonPress = () => {
    alert("register")
  }

  return (
    <div className='RegisterPageDiv'>
        <div className='RegisterDiv'>
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
        </div>
      </div>
  );
};

export default Register;