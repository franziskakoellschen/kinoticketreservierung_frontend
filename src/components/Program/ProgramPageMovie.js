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
        <div style={{
          flex: "1 1 auto"  
        }}>
            <p style={{margin:30, marginLeft:0}}>{this.movie.title}</p>
            <p>Jahr: {this.movie.year}</p>
            <p>FSK: {this.movie.fsk}</p>
            <p>Kurzbeschreibung: {this.movie.shortDescription}</p>
            <FilmShows filmShows={this.movie.filmShows}/>
        </div>
        <button className="moreDetailsButton" onClick={() => alert("to details page")}>More details</button>
      </div>
    );
  };
}
