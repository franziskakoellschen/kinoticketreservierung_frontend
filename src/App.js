import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Program from './pages/program';
import Movie from './pages/movie';
import Signup from './pages/singup';
import Signin from './pages/signin';
import Booking from './pages/booking';

function onButtonClick() {
  
  var backendUrl;
  if (process.env.REACT_APP_DEPLOYMENT_STAGE === "DEV") {
    backendUrl = "https://kinoticket-backend-dev.herokuapp.com/";
  } else if (process.env.REACT_APP_DEPLOYMENT_STAGE === "PROD") {
    backendUrl = "https://kinoticket-backend-prod.herokuapp.com/";
  } else {
    backendUrl = "http://localhost:8080/";
  }

  axios.get(backendUrl + "testRequest")
  .then(function (response) {
    alert("Requested URL was: " + backendUrl  + "\nResponse data: " + response.data);
  })
  .catch(function (error) {
    alert(error);
  });

}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/program' exact element={<Program />} />
        <Route path='/movie' exact element={<Movie />} />
        <Route path='/sign-up' exact element={<Signup />} />
        <Route path='/signin' exact element={<Signin />} />
        <Route path='/booking' exact element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;