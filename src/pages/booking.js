import { getTestRequestData } from './../api';
import React, { useState, useEffect } from 'react';



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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
       <button onClick={onButtonClick}>Trigger backend</button>
    </div>
  );
};

export default Booking;