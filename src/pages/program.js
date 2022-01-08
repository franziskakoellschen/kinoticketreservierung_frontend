import './program.css'

import React, { useEffect, useState } from 'react';
import { getMovies, getMoviesBetweenDates } from '../api';
import { ProgramPageMovie } from '../components/Program/ProgramPageMovie.js';
import Page from '../components/Page/Page';
import FilterBar from '../components/FilterBar/FilterBar';

const Program = () => {
  const [data, setData] = useState([]);
  const [dateFrom, setDateFrom] = useState([]);
  const [dateTo, setDateTo] = useState([]);
  const [genre, setGenre] = useState([]);



  const onClick = () => {
    async function fetchMyAPI ()  {
      console.log(dateTo);
      let answer = await getMoviesBetweenDates(dateFrom, dateTo);
      setData(answer);
    }
    
    fetchMyAPI();
  } 

  useEffect(()=>{
    async function fetchMyAPI ()  {
      let answer = await getMovies();
      setData(answer);
    }
    
    fetchMyAPI();
    
  }, []);
  
  return (
    <Page>
     <div className="outerDiv">
      <FilterBar dateFrom={dateFrom} setDateFrom={setDateFrom}
                 dateTo={dateTo} setDateTo={setDateTo} onClick={onClick}
                 setGenre={setGenre}
      />
      <div className="moviesDiv">
        {
          data && data.length === 0 && (
            <p className="errorMessageText">
              Sorry! There are currently no movies available.
            </p>
          )
        } 
        {
          data && data.map((movie) => <ProgramPageMovie key={movie.id} movie={movie}  />  )
        }
      </div>
      </div>
    </Page>
  );
};

export default Program;