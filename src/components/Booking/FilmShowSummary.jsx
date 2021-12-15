import './FilmShowSummary.css';

const FilmShowSummary = ({filmShowInformation}) => {

  let date = new Date(filmShowInformation.date).toLocaleDateString();
  let time = filmShowInformation.time

  return(
    <div className="FilmShowSummary">
      <p className='DetailItem'>{filmShowInformation.movie.title}</p>
      <p className='DetailItem'>Kinosaal: {filmShowInformation.cinemaHall.id}</p>
      <p className='DetailItem'>Datum: {date}</p>
      <p className='DetailItem'>Uhrzeit: {time}</p>
    </div>
  );
}

export default FilmShowSummary;
