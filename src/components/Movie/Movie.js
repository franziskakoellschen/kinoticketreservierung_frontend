import './Movie.css';

import React from 'react';
import { Component } from 'react';
import { FilmShows } from './FilmShows';

export class Movie extends Component {

  constructor(props) {
    super(props);

    this.movie = props.movie;
  }

  render = function () {
    return (
      <div onClick={() => alert("test")}
        className="movieDiv"
      >
        <img src={this.movie.imageUrl} alt="Not available"
          className="movieImg"/>
        <div>
            <p>{this.movie.title}</p>
            <p>Jahr: {this.movie.year}</p>
            <p>FSK: {this.movie.fsk}</p>
            <p>Kurzbeschreibung: {this.movie.shortDescription}</p>
            <FilmShows filmShows={this.movie.filmShows}/>
        </div>
      </div>
    );
  };
}
