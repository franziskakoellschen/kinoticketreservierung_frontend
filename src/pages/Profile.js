import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInformation, logout } from "../api";
import Page from "../components/Page/Page";
import PopupContainer from "../components/Popup/PopupContainer";
import PopupContinueButton from "../components/Popup/PopupContinueButton";
import UserDetails from "../components/Profile/UserDetails";
import "./Profile.css";

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  const [changeMode, setChangeMode] = useState(false);

  const onLogoutClick = function () {
    logout(setUser);
    navigate("/");
  };

  const onEditClick = function () {
    //setChangeMode(!changeMode);
    alert("Coming soon!")
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
          {userDetails && <UserDetails user={userDetails} changeMode={!changeMode}/>}
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
