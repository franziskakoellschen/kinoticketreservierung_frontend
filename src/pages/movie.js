import './movie.css'

import React, { useEffect, useState } from 'react';
import { getMovies } from '../api';
import { Movie } from '../components/Movie/Movie.js';

const MoviePage = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    async function fetchMyAPI ()  {
      let answer = await getMovies();
      setData(answer);
    }
    
    fetchMyAPI();
    
  }, []);
  
  return (
    <div className="moviePageDiv">
      <div className="moviesDiv">
      {
          data && data.length === 0 && (
            <p className="errorMessageText">
              Sorry! There are currently no movies available.
            </p>
          )
        }
        {
          data && data.map((movie) => <Movie movie={movie} /> )
        }
      </div>
    </div>
  );
};

export default MoviePage;