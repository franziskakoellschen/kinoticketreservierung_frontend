import './ProgramPageMovie.css';

import React from 'react';
import { FilmShows } from './FilmShows';
import { useNavigate } from 'react-router-dom';

export const ProgramPageMovie = ({movie}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/movie/' + movie.id);
  }

    return (
      <div
        className="movieDiv"
      >
        <div className="movieImgDiv">
          <img src={movie.imageUrl} alt="Not available"
            className="movieImg"/>
        </div>
        <div className="movieInformationDiv">
            <p className="movieTitle">{movie.title}</p>
            <p className="movieDetails">Jahr: {movie.year} | FSK {movie.fsk}</p>
            <p className="movieDescription">{movie.shortDescription}</p>
            <FilmShows filmShows={movie.filmShows}/>
        </div>
        <button className="moreDetailsButton" onClick={handleClick}>Mehr Informationen</button>
      </div>
    );
  
}
