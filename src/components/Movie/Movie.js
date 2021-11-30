import styles from './Movie.css';

import React from 'react';
import { Component } from 'react';

export class Movie extends Component {

  constructor(props) {
    super(props);

    this.movie = props.movie;
  }

  render = function () {
    return (
        <div>
            <p>Titel: {this.movie.title}</p>
            <p>Jahr: {this.movie.year}</p>
            <p>FSK: {this.movie.fsk}</p>
            <p>Trailer: {this.movie.trailer}</p>
            <p>Kurzbeschreibung: {this.movie.shortDescription}</p>
        </div>
    );
  };
}
