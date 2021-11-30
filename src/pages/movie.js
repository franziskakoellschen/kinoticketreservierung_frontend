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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <div
        style={{
          alignItems: 'center',
          height: '90vh'
        }}
      >
        {
          data && data.length === 0 && (<p>No Movies available</p>)
        }
        {
          data && data.map((movie) => <Movie movie={movie} /> )
        }
      </div>
    </div>
  );
};

export default MoviePage;