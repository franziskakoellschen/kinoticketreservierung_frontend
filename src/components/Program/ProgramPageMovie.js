import './ProgramPageMovie.css';

import React, { useEffect } from 'react';
import { Component } from 'react';
import { FilmShows } from './FilmShows';
import { useNavigate } from 'react-router';

export const ProgramPageMovie = (props) => {

  useEffect(() => {
  console.log(props.movie.title)    
  })
   
    const navigate = useNavigate();

    const handleClick = () => {
      props.setMovie(props.movie)
      navigate('/movie')
    }
  
    return (
      <div
        className="movieDiv"
      >
        <div className="movieImgDiv">
          <img src={props.movie.imageUrl} alt="Not available"
            className="movieImg"/>
        </div>
        <div className="movieInformationDiv">
            <p className="movieTitle">{props.movie.title}</p>
            <p className="movieDetails">Jahr: {props.movie.year} | FSK {props.movie.fsk}</p>
            <p className="movieDescription">{props.movie.shortDescription}</p>
            <FilmShows filmShows={props.movie.filmShows}/>
        </div>
        <button className="moreDetailsButton" onClick={handleClick}>More details</button>
      </div>
    );
  
}
