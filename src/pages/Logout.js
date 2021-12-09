import React, { useState } from 'react';
import Page from '../components/Page/Page';
import PopupContainer from '../components/Popup/PopupContainer';
import PopupContinueButton from '../components/Popup/PopupContinueButton';
import PopupMessage from '../components/Popup/PopupMessage';

const Logout = ({setIsLoggedIn}) => {

  const [loggedOut, setLoggedOut] = useState(false)

  const onLogoutClick = function() {
    setIsLoggedIn(false)
    setLoggedOut(true)
  }

  return (
    <Page>
      {loggedOut && (
        <PopupMessage>
          Auf Wiedersehen!
        </PopupMessage>
        )
      } {
        !loggedOut && (
          <PopupContainer title={"Konto"}>
            <PopupContinueButton onClick={onLogoutClick}>
              Ausloggen
            </PopupContinueButton>
          </PopupContainer>
        )
      }
    </Page>
  );
};

export default Logout;