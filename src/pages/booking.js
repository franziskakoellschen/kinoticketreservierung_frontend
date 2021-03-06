
import { getFilmShowInformation } from './../api';
import React, { useState, useEffect } from 'react';
import Page from '../components/Page/Page';
import SeatingPlan from '../components/Booking/SeatingPlan';
import CheckoutArea from '../components/Booking/CheckoutArea';
import FilmShowSummary from '../components/Booking/FilmShowSummary';
import { useParams } from 'react-router-dom';
import CenterContent from '../components/Page/CenterContent';

const Booking = ({ route, navigation }) => {

  const [selectedSeats, setSelectedSeats] = useState([]);

  const [filmShowInformation, setFilmShowInformation] = useState();
  const { filmShowID } = useParams();

  const toggleSeatSelected = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((element) => {
          return element !== seat;
        })
      );
    } else {
      setSelectedSeats(
        selectedSeats => [...selectedSeats, seat]
      );
    }

  };

  useEffect(() => {
    async function fetchMyAPI() {
      let answer = await getFilmShowInformation(filmShowID);
      setFilmShowInformation(answer);
    }
    filmShowID && fetchMyAPI();
  }, [filmShowID])

  return (
    <Page>
      <CenterContent>
        {!filmShowInformation && "Not available"}
        {(filmShowInformation && filmShowInformation.filmShowSeats) && (<>
          <FilmShowSummary filmShowInformation={filmShowInformation} />
          <SeatingPlan
            seatingPlan={filmShowInformation.filmShowSeats}
            toggleSeatSelected={toggleSeatSelected}
          />
        </>)}
        {selectedSeats.length !== 0 && <CheckoutArea selectedSeats={selectedSeats} filmShowId={filmShowID} />}
      </CenterContent>
    </Page>
  );
};

export default Booking;