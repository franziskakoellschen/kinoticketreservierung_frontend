import React, { useState, useEffect } from 'react';
import MovieDescription from '../components/MovieDetail/movieDescription';
import Page from '../components/Page/Page';
import ReactPlayer from 'react-player'
import './movie.css';
import { getMovieById, getMovies } from '../api';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FilmShowsDetail from '../components/MovieDetail/filmShowsDetail';
import CenterContent from '../components/Page/CenterContent';


const Movie = ({ route, navigation }) => {

  let { id } = useParams();

  const [movie, setMovie] = useState();
  const [movies, setMovies] = useState();
  const [isloaded, setIsLoaded] = useState(false);
  const [filmShowState, setFilmShowState] = useState();
  const [filmShowsValues, setFilmShowsValues] = useState([]);
  const [filmShowKeys, setFilmShowKeys] = useState([]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    

    if(filmShowState===undefined){
      sortFilmShows();
    }

    console.log('in UseEffect');
    if (id) {
      async function fetchMyAPI() {
        let answer = await getMovieById(id);
        setMovie(answer);
        setIsLoaded(true);
      }

      fetchMyAPI();
    } else {
      async function fetchMyAPI() {
        setMovies(await getMovies());
      }

      fetchMyAPI();
    }

    if (filmShowState !== undefined) {
      setFilmShowKeysAndValues();
    }

    if (movie !== undefined) {
      axios.get(
        'http://localhost:8080/image/' + movie.image_id,
        { responseType: 'arraybuffer' },
      )
        .then(response => {
          const base64 = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              '',
            ),
          );
          setImage(base64);
        });
    }
  },[isloaded, filmShowState, filmShowKeys/*movie.image_id*/]);

  function sortFilmShows() {
    let showMap = new Map();
    if (movie !== undefined) {
      const filmShows = movie.filmShows;

      filmShows.map(currentShow => {

        var date = new Date(currentShow.date);

          var filmShowArray = [];
          filmShowArray.push(currentShow);
          var stringDate = date.toString().substring(0, 15);

          if (showMap.has(stringDate)) {
            showMap.get(stringDate).push(currentShow);
          }
          else {
            showMap.set(stringDate, filmShowArray)
          }
        
      })
      setFilmShowState(showMap);
      console.log('is Set');
    }
  }

  function setFilmShowKeysAndValues() {
    if (filmShowKeys.length === 0) {

      filmShowState && filmShowState.forEach((value, key) => {
        setFilmShowKeys(prevFilmShowKeys => [...prevFilmShowKeys, key]);
        setFilmShowsValues(prevFilmShowValues => [...prevFilmShowValues, value]);
      })
    }
  }

  function sortFilmShows() {
    let showMap = new Map();
    if (movie !== undefined) {
      const filmShows = movie.filmShows;

      filmShows.map(currentShow => {

        var date = new Date(currentShow.date);

          var filmShowArray = [];
          filmShowArray.push(currentShow);
          var stringDate = date.toString().substring(0, 15);

          if (showMap.has(stringDate)) {
            showMap.get(stringDate).push(currentShow);
          }
          else {
            showMap.set(stringDate, filmShowArray)
          }
        
      })
      setFilmShowState(showMap);
      console.log('is Set');
    }
  }

  function setFilmShowKeysAndValues() {
    if (filmShowKeys.length === 0) {

      filmShowState && filmShowState.forEach((value, key) => {
        setFilmShowKeys(prevFilmShowKeys => [...prevFilmShowKeys, key]);
        setFilmShowsValues(prevFilmShowValues => [...prevFilmShowValues, value]);
      })
    }
  }

  const [image, setImage] = useState('iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAcSURBVChTYxQTE/vPQARggtIEwahCvIBIhQwMAA9WAVUQUjPOAAAAAElFTkSuQmCC');
  const contentType = 'image/png';
  const b64Data = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

  const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  function toBlobUlr(contentType, b64Data) {

    const blob = b64toBlob(b64Data, contentType);
    const blobUrl = URL.createObjectURL(blob);
    return blobUrl

  }


  if (!movie) {
    return (
      <Page>
        {!movies && <CenterContent>Loading</CenterContent>}
        {movies && (
          <div>
            {movies.map((movie) => <p style={{ margin: "1%", textAlign: "center" }}>{movie.title}</p>)}
          </div>)
        }
      </Page>
    )
  }

  return (movie &&
    <Page>
      <div className='moviedetail'>
        <div id="outerContainer">
          <div id="first">
            <div id="movieDiv">
              <ReactPlayer
                className="reactPlayer"
                width="inherit"
                height="inherit"
                playing
                url={movie.trailer}
                playIcon={<button id="playButton" />}
                light={toBlobUlr(contentType, image)}
              />
            </div>
            <div id="topDiv"></div>
          </div>
          <div id="second">
            <div id="moviesidedesc" >
              <MovieDescription movie={movie} />
            </div>
          </div>
        </div>
        <hr id="movieDescrSeperator" />
        <div id="showsContainer">
          <h1 id="showsHeader">Nächste Vorstellungen</h1>
          <div id="showslist" >{
            filmShowKeys.map((value, index) =>
              <FilmShowsDetail passedDate={value} passedObject={filmShowsValues[index]} />
            )}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Movie;