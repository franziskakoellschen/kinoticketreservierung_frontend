import './program.css'

import React, { useEffect, useState } from 'react';
import { getMovies, getMoviesWithFilter  , getWithFilters} from '../api';
import { ProgramPageMovie } from '../components/Program/ProgramPageMovie.js';
import Page from '../components/Page/Page';
import FilterBar from '../components/FilterBar/FilterBar';
import Slideshow from '../components/Slideshow/Slideshow';

const Program = () => {
  const [data, setData] = useState([]);
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [genre, setGenre] = useState();



  const onClick = () => {
    async function fetchMyAPI ()  {
     let dto = { ['date1'] : dateFrom,
                 ['date2'] : dateTo,   
                 ['genre'] : genre }
                 
      let answer = await getWithFilters(dto);
      setData(answer.data);
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
       <Slideshow />
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