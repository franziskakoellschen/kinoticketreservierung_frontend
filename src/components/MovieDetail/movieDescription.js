import React, {useState} from 'react';
import './movieDescription.css';
import moment from 'moment'

const MovieDescription = (props) => {

function formatDate(date){
  return moment(date).format('DD MMM, YYYY')
}

  return(
    <div id="bodyDescription">
  <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css' />
      <h1 id="movieDescrHeader">
        {props.movie.title}
    </h1>
        <div id="subTitle">{props.movie.genre} | Sneak Preview | FSK {props.movie.fsk} | {props.movie.filmLength} Minuten</div>
        <div id="shortDescr">{props.movie.shortDescription}</div>
        <div id="fullDescr">{props.movie.description}</div>
        <hr className="DescrSeperator"/>
        <div id="movieProps">
          <p><span className="spanProps">Filmstart:</span> {formatDate(props.movie.startDate)}</p>
          <p><span className="spanProps">Dauer:</span> {props.movie.filmLength} Min</p> 
          <p><span className="spanProps">Jahr:</span> {props.movie.year}</p>
          <p><span className="spanProps">Schauspieler:</span> {props.movie.actors}</p>
        </div> 
    </div>
      );

}

export default MovieDescription;