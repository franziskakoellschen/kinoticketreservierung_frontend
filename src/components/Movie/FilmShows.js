
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
      <div 
        style={{
          display: 'flex',
          alignItems: 'top',
          margin: 60,
        }}
      >
        {
          this.filmShows && this.filmShows.length === 0 && (<p
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                Sorry! There are currently no Shows available. We'll be back soon.
            </p>)
        }
        {
          this.filmShows && this.filmShows.map((filmShow) => {
            let date = new Date(filmShow.date).toLocaleDateString();
            let time = filmShow.time // TODO: parse Date from timestamp

            return (
                <div style={{
                    border: '2px solid red',
                    borderRadius: '5px',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
            )})
        }    
      </div>
    );
  };
}
