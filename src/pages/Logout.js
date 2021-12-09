import React from 'react';
import Page from '../components/Page/Page';
import PopupContainer from '../components/Popup/PopupContainer';

const Logout = ({setIsLoggedIn}) => {

  setIsLoggedIn(false)

  return (
    <Page>
      <PopupContainer>
        <h1>Goodbye!</h1>
      </PopupContainer>
    </Page>
  );
};

export default Logout;