import './FilmShows.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

export const FilmShows = (props) => {
  const navigate = useNavigate();

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
          const handleClick = () => {          
            navigate("/booking/" + filmShow.id);
          }

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

