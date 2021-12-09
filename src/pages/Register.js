import React from 'react';

const Logout = ({setIsLoggedIn}) => {

  setIsLoggedIn(false)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Register</h1>
    </div>
  );
};

export default Logout;