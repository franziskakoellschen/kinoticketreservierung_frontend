import { getTestRequestData } from './../api';
import React, { useState, useEffect } from 'react';
import Page from '../components/Page/Page';



const Booking = () => {
    const [data, setData] = useState();

    useEffect(()=>{
        async function fetchMyAPI ()  {
            let anwser = await getTestRequestData();
            setData(anwser);
        }
        fetchMyAPI();
    },[])

    function onButtonClick() {
        alert(data);
          }
          

  return (
    <Page>
       <button onClick={onButtonClick}>Trigger backend</button>
    </Page>
  );
};

export default Booking;