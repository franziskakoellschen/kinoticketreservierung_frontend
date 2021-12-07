import './ProgramPageMovie.css';

import React from 'react';
import { Component } from 'react';
import { FilmShows } from './FilmShows';

export class ProgramPageMovie extends Component {

  constructor(props) {
    super(props);

    this.movie = props.movie;
  }

  render = function () {
    return (
      <div
        className="movieDiv"
      >
        <img src={this.movie.imageUrl} alt="Not available"
          className="movieImg"/>
        <div className="movieInformationDiv">
            <p className="movieTitle">{this.movie.title}</p>
            <p className="movieDetails">Jahr: {this.movie.year} | FSK {this.movie.fsk}</p>
            <p className="movieDescription">{this.movie.shortDescription}</p>
            <FilmShows filmShows={this.movie.filmShows}/>
        </div>
        <button className="moreDetailsButton" onClick={() => alert("to details page")}>More details</button>
      </div>
    );
  };
}
