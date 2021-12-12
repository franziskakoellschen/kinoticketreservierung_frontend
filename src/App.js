import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import Home from './pages';
import Program from './pages/program';
import Movie from './pages/movie';
import Signin from './pages/signin';
import Booking from './pages/booking';
import { useState } from 'react';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/program' exact element={<Program />} />
        <Route path='/movie' exact element={<Movie />}/>
        <Route path='/movie/:id' exact element={<Movie />}/>
        <Route path='/signin' exact element={<Signin />} />
        <Route path='/booking' exact element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;