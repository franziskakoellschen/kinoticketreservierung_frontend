
import { getFilmShowSeats } from './../api';
import React, { useState, useEffect } from 'react';
import Page from '../components/Page/Page';
import SeatingPlan from '../components/Booking/SeatingPlan';
import CheckoutArea from '../components/Booking/CheckoutArea';
import { useParams } from 'react-router-dom';

const Booking = ({route, navigation}) => {

  const [selectedSeats, setSelectedSeats] = useState([]);

  const [data, setData] = useState([]);
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
    async function fetchMyAPI ()  {
      let answer = await getFilmShowSeats(filmShowID);
      setData(answer);
    }
    fetchMyAPI();
  },[filmShowID])

  return (
    <Page>
      {(!data || data.length === 0) && "Not available"}
      {data.length !== 0 && (
        <SeatingPlan
          seatingPlan={data}
          toggleSeatSelected={toggleSeatSelected}
        />
      )}
      {selectedSeats.length !== 0 && <CheckoutArea selectedSeats={selectedSeats} filmShowId={filmShowID}/>}
    </Page>
  );
};

export default Booking;