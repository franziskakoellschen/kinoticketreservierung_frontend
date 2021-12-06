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
    if (this.filmShows && this.filmShows.length === 0) {
      return (
        <div className="filmShowsDiv">
          {
             (
              <p className="noShowsAvailableMsg">
                  Sorry! There are currently no Shows available. We'll be back soon.
              </p>)
          }    
        </div>
      );
    }

    return (
      <div style={{
        marginTop: 30
      }}>
        <p>Nächste Vorstellungen</p>
        <div className="filmShowsDiv">
        {
          this.filmShows.map((filmShow) => {
            let date = new Date(filmShow.date).toLocaleDateString();
            let time = filmShow.time // TODO: parse Date from timestamp

            return (
                <div className="filmShowDiv" onClick={() => alert("to booking page")}>
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
            )})
        }
        </div>
      </div>
    );
  }
}
