import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Program from './pages/program';
import Movie from './pages/movie';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Booking from './pages/booking';
import { useState } from 'react';
import Register from './pages/Register';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [desiredEmail, setDesiredEmail] = useState("");

  return (
    <Router>
      <Navbar
        loggedIn={isLoggedIn}
        userFirstName="Vorname" // TEMP
      />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/program' exact element={<Program />} />
        <Route path='/movie' exact element={<Movie />}/>
        <Route path='/movie/:id' exact element={<Movie />}/>
        <Route path='/login' exact element={<Login setIsLoggedIn={setIsLoggedIn} setDesiredEmail={setDesiredEmail} />} />
        <Route path='/logout' exact element={<Logout setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/register' exact element={<Register desiredEmail={desiredEmail} />} />
        <Route path='/booking' exact element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;