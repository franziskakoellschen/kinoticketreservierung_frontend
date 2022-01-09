import './program.css'

import React, { useEffect, useState } from 'react';
import { getMovies, getMoviesWithFilter  , getWithFilters} from '../api';
import { ProgramPageMovie } from '../components/Program/ProgramPageMovie.js';
import Page from '../components/Page/Page';
import FilterBar from '../components/FilterBar/FilterBar';

const Program = () => {
  const [data, setData] = useState([]);
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [genre, setGenre] = useState();
  const [dimension, setDimension] = useState();
  const [language, setLanguage] = useState();




  const onClearFilter = () => {

      setDateFrom(undefined);
      setDateTo(undefined);
      setGenre(undefined);
      setDimension(undefined);
      setLanguage(undefined);

      
      async function fetchMyAPI ()  {
        let answer = await getMovies();
        setData(answer);
      }
      
      fetchMyAPI();
  }

  function getLanguageKey(){
    var shortLanguage;
    
    if(language === undefined) { return language; }
    
    switch (language) {
      case "Deutsch":
          shortLanguage ="DE"
        break;
      case "Spanisch":
          shortLanguage ="ESP"
        break;
      case "Frazöisch":
          shortLanguage ="FR"
      break;
      case "Englisch":
        shortLanguage ="EN"
    break;
    }
return shortLanguage;
  }

  const onClick = () => {
    async function fetchMyAPI ()  {
   
     let dto = { ['date1'] : dateFrom,
                 ['date2'] : dateTo,   
                 ['genre'] : (genre === undefined ? undefined : genre.toUpperCase()),
                 ['dimension'] : dimension,
                 ['language'] : getLanguageKey()
                }
                 console.log(dto);
      let answer = await getWithFilters(dto);
      setData(answer.data);
    }
    
    fetchMyAPI();
  } 

  useEffect(()=>{
    async function fetchMyAPI ()  {
      let answer = await getMovies();
      setData(answer);
    }
    
    fetchMyAPI();
    
  }, []);
  
  return (
    <Page>
     <div className="outerDiv">
      <FilterBar dateFrom={dateFrom} setDateFrom={setDateFrom}
                 dateTo={dateTo} setDateTo={setDateTo} onClick={onClick}
                 setGenre={setGenre} genre ={genre} onClearFilter = {onClearFilter}
                 setDimension={setDimension} dimension={dimension} setLanguage ={setLanguage}
                 language={language}
      />
      <div className="moviesDiv">
        {
          data && data.length === 0 && (
            <p className="errorMessageText">
              Sorry! There are currently no movies available.
            </p>
          )
        } 
        {
          data && data.map((movie) => <ProgramPageMovie key={movie.id} movie={movie}  />  )
        }
      </div>
      </div>
    </Page>
  );
};

export default Program;