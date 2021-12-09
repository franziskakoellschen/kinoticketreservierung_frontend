import React from 'react';
import Page from '../components/Page/Page';
import PopupMessage from '../components/Popup/PopupMessage';

const Logout = ({setIsLoggedIn}) => {

  setIsLoggedIn(false)

  return (
    <Page>
      <PopupMessage>
        Auf Wiedersehen!
      </PopupMessage>
    </Page>
  );
};

export default Logout;