
import React, { useEffect } from 'react';
import Page from '../components/Page/Page';
import { useLocation } from 'react-router-dom';
import CenterContent from '../components/Page/CenterContent';
import CheckoutContainer from '../components/Checkout/CheckoutContainer';

const CheckoutFields = ( ) => {


  const { state } = useLocation();
  const response = state.response;
  const filmShowId = state.filmShowId;
  const selectedSeats = state.selectedSeats;

  useEffect(() => {
    console.log(state);
  })

  return (
    <Page>  
      <CheckoutContainer filmShowId={filmShowId} selectedSeats={selectedSeats} response={response} />
    </Page>
  );
};

export default CheckoutFields;