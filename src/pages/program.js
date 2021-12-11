import './program.css'

import React, { useEffect, useState } from 'react';
import { getMovies } from '../api';
import { ProgramPageMovie } from '../components/Program/ProgramPageMovie.js';

const Program = (props) => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    async function fetchMyAPI ()  {
      let answer = await getMovies();
      setData(answer);
      console.log(answer);
    }
    
    fetchMyAPI();
    
  }, []);
  
  return (
    <div className="programPageDiv">
      <div className="moviesDiv">
        {
          data && data.length === 0 && (
            <p className="errorMessageText">
              Sorry! There are currently no movies available.
            </p>
          )
        } 
        {
          data && data.map((movie) => <ProgramPageMovie movie={movie} setMovie={props.setMovie} /> )
        }
      </div>
    </div>
  );
};

export default Program;