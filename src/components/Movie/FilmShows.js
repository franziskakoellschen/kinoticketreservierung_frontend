import './FilmShows.css';

import React from 'react';
import { Component } from 'react';

export class FilmShows extends Component {

  constructor(props) {
    super(props);

    this.filmShows = props.filmShows;
    console.log(this.filmShows)
  }

  render = function () {
    return (
      <div className="filmShowsDiv">
        {
          this.filmShows && this.filmShows.length === 0 && (
            <p className="noShowsAvailableMsg">
                Sorry! There are currently no Shows available. We'll be back soon.
            </p>)
        }
        {
          this.filmShows && this.filmShows.map((filmShow) => {
            let date = new Date(filmShow.date).toLocaleDateString();
            let time = filmShow.time // TODO: parse Date from timestamp

            return (
                <div className="filmShowDiv">
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
            )})
        }    
      </div>
    );
  };
}
