import React, { useState, useEffect } from 'react';
import MovieDescription  from '../components/MovieDetail/movieDescription';
import Page from '../components/Page/Page';
import ReactPlayer from 'react-player'
import './movie.css';
import testImage from '../assets/testpic.jpeg';
import { getMovieById, getMovies, getMoviesTest } from '../api';
import { getImage } from '../api';
import axios from 'axios';
import { FilmShows } from '../components/Program/FilmShows';
import { useParams } from 'react-router-dom';


const Movie = ({route, navigation}) => {

  let {id} = useParams();

  const [movie, setMovie] = useState();
  const [movies, setMovies] = useState();

  useEffect(()=>{
  
    if (id) {
      async function fetchMyAPI ()  {
        let answer = await getMovieById(id);
        setMovie(answer);
      }

      fetchMyAPI();
    } else {
      async function fetchMyAPI () {
        setMovies(await getMovies());
      }
      
      fetchMyAPI();
    }
/*
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
*/
  },[movie/*movie.image_id*/]);

  const [image, setImage] = useState('/9j/4AAQSkZJRgABAQEAeAB4AAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8V6KKKAP/2Q==');
  const contentType = 'image/png';
  const b64Data = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
  

  const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
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

    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  function toBlobUlr (contentType, b64Data){

    const blob = b64toBlob(b64Data, contentType);
    const blobUrl = URL.createObjectURL(blob);
    return blobUrl
  }

  if (!movie) {
    return (
      <Page>
        {!movies && "Loading"}
        {
          movies && movies.map((movie) => <p>{movie.title}</p>)
        }
      </Page>
    )
  }

  return (movie &&
    <Page>
      <div id="first">
        <div id="movieDiv">
          <ReactPlayer
            className = "reactPlayer"
            width = "100%"
            height = "inherit"
            playing
            url = {movie.trailer}
            playIcon = {<button id = "playButton">Play</button>}
            light = {toBlobUlr(contentType, image)}
          />
        </div>
      </div>
      <div id="separator"></div>
      <div id="second">
        <MovieDescription  movie={movie}/>
      </div>
    </Page>
  );
};

export default Movie;