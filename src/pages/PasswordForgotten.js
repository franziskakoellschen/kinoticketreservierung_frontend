import React, { useState } from "react";
import Field from "../components/Input/TextField";
import { resetPasswordForEmail } from "../api";
import PopupContainer from "../components/Popup/PopupContainer";
import Page from "../components/Page/Page";
import PopupContinueButton from "../components/Popup/PopupContinueButton";
import { mailNotValid } from "../util/ValidationUtils";

const PasswordForgotten = () => {
  const [email, setEmail] = useState("");

  const onResetPasswordClick = () => {
    async function fetchMyAPI() {
      try {
        await resetPasswordForEmail(email);
        alert("Email gesendet")
      } catch (error) {
        alert("Error: " + error.response.status);
      }
    }

    if (email !== "" && !mailNotValid(email)) {
      fetchMyAPI();
    } else {
      alert("Invalid email");
    }
  };

  return (
    <Page>
      <PopupContainer title="Passwort vergessen">
        <Field label="Email" setInputValue={setEmail} />
        <PopupContinueButton onClick={onResetPasswordClick}>
          Passwort zurücksetzen
        </PopupContinueButton>
      </PopupContainer>
    </Page>
  );
};

export default PasswordForgotten;
