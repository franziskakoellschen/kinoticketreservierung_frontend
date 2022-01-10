import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInformation, logout, updateUserInformation } from "../api";
import Page from "../components/Page/Page";
import PopupContainer from "../components/Popup/PopupContainer";
import PopupContinueButton from "../components/Popup/PopupContinueButton";
import UserDetails from "../components/Profile/UserDetails";
import "./Profile.css";
import { alphanumericInputNotValid, houseNumberNotValid, phoneNumberNotValid, postCodeNotValid } from "../util/ValidationUtils";

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  const [changeMode, setChangeMode] = useState(false);

  const [newSurname, setSurname] = useState();
  const [newLastname, setLastname] = useState();
  const [newStreet, setStreet] = useState();
  const [newHouseNumber, setHouseNumber] = useState();
  const [newPostCode, setPostCode] = useState();
  const [newCity, setCity] = useState();
  const [newPhoneNumber, setPhoneNumber] = useState();

  const [surnameFormatIsWrong, setSurnameFormatIsWrong] = useState(false);
  const [nameFormatIsWrong, setNameFormatIsWrong] = useState(false);
  const [streetFormatIsWrong, setStreetFormatIsWrong] = useState(false);
  const [HouseNumberFormatIsWrong, setHouseNumberFormatIsWrong] =
    useState(false);
  const [postCodeFormatIsWrong, setPostCodeFormatIsWrong] = useState(false);
  const [cityFormatIsWrong, setCityFormatIsWrong] = useState(false);
  const [phoneNumberFormatIsWrong, setPhoneNumberFormatIsWrong] = useState(false);

  const onEditClick = function () {
    if (!changeMode) {
      setChangeMode(true)
      return;
    }

    var wrongInputFields = "";

    setNameFormatIsWrong(alphanumericInputNotValid(newLastname));
    setSurnameFormatIsWrong(alphanumericInputNotValid(newSurname));
    setStreetFormatIsWrong(alphanumericInputNotValid(newStreet));
    setHouseNumberFormatIsWrong(houseNumberNotValid(newHouseNumber));
    setPostCodeFormatIsWrong(postCodeNotValid(newPostCode));
    setCityFormatIsWrong(alphanumericInputNotValid(newCity));
    setPhoneNumberFormatIsWrong(phoneNumberNotValid(newPhoneNumber));

    if (
      (nameFormatIsWrong && newLastname) ||
      (phoneNumberFormatIsWrong && newPhoneNumber) ||
      (surnameFormatIsWrong && newSurname) ||
      (streetFormatIsWrong && newStreet) ||
      (postCodeFormatIsWrong && newPostCode) ||
      (cityFormatIsWrong && newCity)
    ) {
      if (nameFormatIsWrong && newLastname) {
        alert(newLastname)
        if (wrongInputFields !== "") {
          wrongInputFields = wrongInputFields + ",";
        }
        wrongInputFields = wrongInputFields + " Nachname";
      }

      if (surnameFormatIsWrong && newSurname) {
        if (wrongInputFields !== "") {
          wrongInputFields = wrongInputFields + ",";
        }
        wrongInputFields = wrongInputFields + " Vorname";
      }

      if (streetFormatIsWrong && newStreet) {
        if (wrongInputFields !== "") {
          wrongInputFields = wrongInputFields + ",";
        }
        wrongInputFields = wrongInputFields + " Straße";
      }

      if (HouseNumberFormatIsWrong && newHouseNumber) {
        if (wrongInputFields !== "") {
          wrongInputFields = wrongInputFields + ",";
        }
        wrongInputFields = wrongInputFields + " Hausnummer";
      }

      if (postCodeFormatIsWrong && newPostCode) {
        if (wrongInputFields !== "") {
          wrongInputFields = wrongInputFields + ",";
        }
        wrongInputFields = wrongInputFields + " Postleitzahl";
      }

      if (cityFormatIsWrong && newCity) {
        if (wrongInputFields !== "") {
          wrongInputFields = wrongInputFields + ",";
        }
        wrongInputFields = wrongInputFields + " Stadt";
      }

      if (phoneNumberFormatIsWrong && newPhoneNumber) {
        if (wrongInputFields !== "") {
          wrongInputFields = wrongInputFields + ",";
        }
        wrongInputFields = wrongInputFields + " Telefonnummer";
      }

      alert("Bitte überprüfe folgende Felder: " + wrongInputFields);

      wrongInputFields = "";
    } else {
      async function postToAPI(user) {
        try {
          await updateUserInformation(user);
        } catch (error) {
          alert("Something went wrong!");
        }
      }

      if (changeMode) {
        postToAPI({
          username: userDetails.username,
          email: userDetails.email,
          surName: newSurname ? newSurname : userDetails.address.surName,
          lastName: newLastname ? newLastname : userDetails.address.lastName,
          street: newStreet ? newStreet : userDetails.address.street,
          houseNumber: newHouseNumber ? newHouseNumber : userDetails.address.houseNumber,
          postCode: newPostCode ? newPostCode : userDetails.address.postCode,
          city: newCity ? newCity : userDetails.address.city,
          phoneNumber: newPhoneNumber ? newPhoneNumber : userDetails.address.phoneNumber,
        });
      }
      setChangeMode(!changeMode);
    }
  };

  const onLogoutClick = function () {
    logout(setUser);
    navigate("/");
  };

  const onChangePasswordClick = function () {
    alert("Coming soon");
  };

  const onShowBookingsClick = function () {
    navigate("/profile/bookings");
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    async function fetchMyAPI() {
      try {
        let data = await getUserInformation();
        setUserDetails(data);
      } catch (error) {
        alert("Something went wrong!");
      }
    }

    user && fetchMyAPI();
  }, [user]);

  return (
    user && (
      <Page>
        <PopupContainer title={"Profil"} wide={true}>
          {userDetails && (
            <UserDetails
              user={userDetails}
              changeMode={!changeMode}
              setSurname={setSurname}
              setLastname={setLastname}
              setStreet={setStreet}
              setHouseNumber={setHouseNumber}
              setPostCode={setPostCode}
              setCity={setCity}
              setPhoneNumber={setPhoneNumber}
              surnameFormatIsWrong={surnameFormatIsWrong}
              nameFormatIsWrong={nameFormatIsWrong}
              streetFormatIsWrong={streetFormatIsWrong}
              HouseNumberFormatIsWrong={HouseNumberFormatIsWrong}
              postCodeFormatIsWrong={postCodeFormatIsWrong}
              cityFormatIsWrong={cityFormatIsWrong}
              phoneNumberFormatIsWrong={phoneNumberFormatIsWrong}
            />
          )}
          <div
            style={{
              background: "inherit",
              display: "flex",
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            <div style={{ background: "inherit", width: "25%" }}>
              <PopupContinueButton onClick={onEditClick}>
                {changeMode ? "Speichern" : "Nutzerdaten ändern"}
              </PopupContinueButton>
            </div>
            <div style={{ background: "inherit", width: "25%" }}>
              <PopupContinueButton onClick={onChangePasswordClick}>
                Passwort ändern
              </PopupContinueButton>
            </div>
            <div style={{ background: "inherit", width: "25%" }}>
              <PopupContinueButton onClick={onShowBookingsClick}>
                Buchungen anzeigen
              </PopupContinueButton>
            </div>
            <div style={{ background: "inherit", width: "25%" }}>
              <PopupContinueButton onClick={onLogoutClick}>
                Abmelden
              </PopupContinueButton>
            </div>
          </div>
        </PopupContainer>
      </Page>
    )
  );
};

export default Profile;
