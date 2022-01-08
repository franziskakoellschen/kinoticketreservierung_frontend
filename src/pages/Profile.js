import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInformation, logout, updateUserInformation } from "../api";
import Page from "../components/Page/Page";
import PopupContainer from "../components/Popup/PopupContainer";
import PopupContinueButton from "../components/Popup/PopupContinueButton";
import UserDetails from "../components/Profile/UserDetails";
import "./Profile.css";

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

  const onLogoutClick = function () {
    logout(setUser);
    navigate("/");
  };

  const onEditClick = function () {
  
    console.log(newSurname)

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
        phoneNumber: newPhoneNumber ? newPhoneNumber : userDetails.address.phoneNumber
      });
    }
    setChangeMode(!changeMode);
  };

  const onChangePasswordClick = function () {
    alert("Coming soon");
  };

  const onShowBookingsClick = function() {
    navigate('/profile/bookings')
  }

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
            <UserDetails user={userDetails} changeMode={!changeMode}
              setSurname={setSurname}
              setLastname={setLastname}
              setStreet={setStreet}
              setHouseNumber={setHouseNumber}
              setPostCode={setPostCode}
              setCity={setCity}
              setPhoneNumber={setPhoneNumber}
            />)}
          <div style={{ background: "inherit", display: "flex", marginTop: 0, marginBottom: 0 }}>
            <div style={{ background: "inherit",  width: "25%" }}>
              <PopupContinueButton onClick={onEditClick}>
                {changeMode ? "Speichern" : "Nutzerdaten ändern"}
              </PopupContinueButton>
            </div>
            <div style={{ background: "inherit",  width: "25%" }}>
              <PopupContinueButton onClick={onChangePasswordClick}>
                Passwort ändern
              </PopupContinueButton>
            </div>
            <div style={{ background: "inherit",  width: "25%" }}>
              <PopupContinueButton onClick={onShowBookingsClick}>
                Buchungen anzeigen
              </PopupContinueButton>
            </div>
            <div style={{ background: "inherit",  width: "25%" }}>
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
