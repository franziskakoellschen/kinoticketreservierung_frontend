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
        style={{
          display: 'flex',
          alignItems: 'top',
          margin: 60,
          border: '2px solid red',
          borderRadius: '5px',
        }}
      >
        <img src={this.movie.imageUrl} alt="No Image available" style={{
          height: '300px',
          marginRight: 80
        }}/>
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
