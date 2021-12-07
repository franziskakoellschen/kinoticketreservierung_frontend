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
            <p style={{
              alignItems: "center",
              display: "flex",
              fontSize: "36px",
              margin: 30,
              marginLeft: 0,
            }}>{this.movie.title}</p>
            <p style={{
              alignItems: "center",
              display: "flex",
              marginBottom: 20,
            }}>Jahr: {this.movie.year} | FSK {this.movie.fsk}</p>
            <p style={{
              alignItems: "center",
              display: "flex",
            }}>{this.movie.shortDescription}</p>
            <FilmShows filmShows={this.movie.filmShows}/>
        </div>
        <button className="moreDetailsButton" onClick={() => alert("to details page")}>More details</button>
      </div>
    );
  };
}
