import React, { useEffect, useState } from "react";
import PopupContainer from "../components/Popup/PopupContainer";
import Page from "../components/Page/Page";
import { cancelBooking, getUserBookings, resendBookingConfirmation } from "../api";

const UserBookings = () => {
  const [bookings, setBookings] = useState();

  const [showDetails, setShowDetails] = useState(0);

  const onBookingClick = (id) => {
    if (showDetails === id) {
      setShowDetails(0);
    } else {
      setShowDetails(id);
    }
  };
  const onCancelClick = (id) => {
    async function fetchMyAPI(id) {
      try {
        await cancelBooking(id);
      } catch (error) {
        alert("Something went wrong");
      }
    }

    fetchMyAPI(id);
    window.location.reload(false);
  };

  const onResendClick = (id) => {
    async function fetchMyAPI(id) {
      try {
        await resendBookingConfirmation(id);
        alert("OK");
      } catch (error) {
        alert("Something went wrong");
      }
    }

    fetchMyAPI(id);
  };

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let data = await getUserBookings();
        setBookings(data);
      } catch (error) {
        alert("Something went wrong");
      }
    }

    !bookings && fetchMyAPI();
  });

  return (
    <Page>
      <PopupContainer title="Buchungen">
        {(!bookings || bookings.length === 0) &&
          "Keine Buchungen für dieses Konto"}
        {bookings &&
          bookings.map((booking) => {
            return (
              <div key={booking.id} style={{ background: "inherit" }}>
                <div
                  onClick={() => {
                    onBookingClick(booking.id);
                  }}
                  style={{ background: "inherit" }}
                >
                  <div style={{ background: "inherit" }}>
                    Buchung {booking.id}
                  </div>
                  <div style={{ background: "inherit" }}>
                    {booking.tickets.at(0).movie.title}
                  </div>
                </div>
                {showDetails === booking.id && (
                  <div>
                    <button
                      onClick={() => {
                        onResendClick(booking.id);
                      }}
                    >
                      Buchungsbestätigung erneut senden
                    </button>
                    <button
                    onClick={() => {
                      onCancelClick(booking.id);
                    }}
                  >
                    Buchung stornieren
                  </button>
                </div>
                )}
              </div>
            );
          })}
      </PopupContainer>
    </Page>
  );
};

export default UserBookings;
