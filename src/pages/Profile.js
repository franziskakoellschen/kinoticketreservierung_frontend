import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../api';
import Page from '../components/Page/Page';
import PopupContainer from '../components/Popup/PopupContainer';
import PopupContinueButton from '../components/Popup/PopupContinueButton';

const Profile = ({user, setUser}) => {
  const navigate = useNavigate();

  const onLogoutClick = function() {
    logout(setUser)
    navigate('/')
  }

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  });

  return (
    user &&(
    <Page>
      <PopupContainer title={"Konto"}>
        <p>Hallo, {user.username}</p>
        <PopupContinueButton onClick={onLogoutClick}>
          Ausloggen
        </PopupContinueButton>
      </PopupContainer>
    </Page>)
  );
};

export default Profile;