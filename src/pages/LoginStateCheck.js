import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PopupContainer from "../components/Popup/PopupContainer";
import Page from "../components/Page/Page";
import PopupContinueButton from "../components/Popup/PopupContinueButton";

const LoginStateCheck = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      navigate("/checkout", { state: state });
    }
  });

  const onLoginButtonPress = function () {
    console.log(state)
    localStorage.setItem("bookingState", JSON.stringify(state))
    navigate("/login");
  };

  const onGuestButtonPress = function () {
    navigate("/checkout", { state: state });
  };

  return (
    <Page>
      <PopupContainer>
        <PopupContinueButton onClick={onLoginButtonPress}>
          Einloggen
        </PopupContinueButton>
        <PopupContinueButton onClick={onGuestButtonPress}>
          Als Gast bestellen
        </PopupContinueButton>
      </PopupContainer>
    </Page>
  );
};

export default LoginStateCheck;
