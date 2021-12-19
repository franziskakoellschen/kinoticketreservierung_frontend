import React from 'react';
import CenterContent from '../components/Page/CenterContent';
import Page from '../components/Page/Page';
import { useNavigate } from 'react-router';
import { useEffect } from 'react/cjs/react.development';

const Home = () => {

  const navigate = useNavigate();
  
useEffect(()=>{
  navigate('/program');
})

  return (
    <Page>
      <CenterContent>
        
      </CenterContent>
    </Page>
  );
};

export default Home;