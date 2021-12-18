import './program.css'

import React, { useEffect, useState } from 'react';
import { getMovies } from '../api';
import { ProgramPageMovie } from '../components/Program/ProgramPageMovie.js';
import Page from '../components/Page/Page';

const Program = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    async function fetchMyAPI ()  {
      let answer = await getMovies();
      setData(answer);
    }
    
    fetchMyAPI();
    
  }, []);
  
  return (
    <Page>
      <div className="moviesDiv">
        {
          data && data.length === 0 && (
            <p className="errorMessageText">
              Sorry! There are currently no movies available.
            </p>
          )
        } 
        {
          data && data.map((movie) => <ProgramPageMovie key={movie.id} movie={movie} /> )
        }
      </div>
    </Page>
  );
};

export default Program;