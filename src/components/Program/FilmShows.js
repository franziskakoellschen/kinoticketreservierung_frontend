import './FilmShows.css';

import React from 'react';

export const FilmShows = (props) => {

  const handleClick = () => {
    alert("test")
  }

  if (props.filmShows && props.filmShows.length === 0) {
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
        props.filmShows.map((filmShow) => {
          let date = new Date(filmShow.date).toLocaleDateString();
          let time = filmShow.time // TODO: parse Date from timestamp

          return (
              <div className="filmShowDiv" onClick={handleClick}>
                  <p>{date}</p>
                  <p>{time}</p>
              </div>
          )})
      }
      </div>
    </div>
  );
}

