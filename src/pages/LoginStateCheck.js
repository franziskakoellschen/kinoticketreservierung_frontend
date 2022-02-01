import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PopupContainer from "../components/Popup/PopupContainer";
import Page from "../components/Page/Page";
import PopupContinueButton from "../components/Popup/PopupContinueButton";
import { isLoggedIn } from "../util/UserHelper";

const LoginStateCheck = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/checkout", { state: state });
    }
  });

  const onLoginButtonPress = function () {
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
