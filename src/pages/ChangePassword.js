import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import PopupContainer from "../components/Popup/PopupContainer";
import Page from "../components/Page/Page";
import PopupContinueButton from "../components/Popup/PopupContinueButton";
import Field from "../components/Input/TextField";
import { changePassword } from "../api";

const ChangePassword = () => {
  const location = useLocation();

  const search = location.search; // could be '?foo=bar'
  const params = new URLSearchParams(search);
  const token = params.get("token");

  const [password, setPassword] = useState();

  const onResetPasswordClick = () => {
    async function fetchMyAPI() {
      try {
        await changePassword(token, password);
        alert("Passwort geändert");
      } catch (error) {
        if (error.response.data && error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert("Error: " + error.response.status);
        }
      }
    }

    if (!password) {
      alert("You must enter a password");
    } else {
      fetchMyAPI();
    }
  };

  return (
    <Page>
      <PopupContainer title="Passwort ändern">
        {token && (
          <>
            <Field
              label="Neues Password"
              type="password"
              setInputValue={setPassword}
            />
            <PopupContinueButton onClick={onResetPasswordClick}>
              Passwort zurücksetzen
            </PopupContinueButton>
          </>
        )}
        {!token && "Kein Token verfügbar!"}
      </PopupContainer>
    </Page>
  );
};

export default ChangePassword;
