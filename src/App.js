import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Program from './pages/program';
import Movie from './pages/movie';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Booking from './pages/booking';
import { useState } from 'react';
import Register from './pages/Register';
import CheckoutFields from './pages/checkout';
import LoginStateCheck from './pages/LoginStateCheck';
import UserBookings from './pages/UserBookings';
import { getUser } from './util/UserHelper';
import PasswordForgotten from './pages/PasswordForgotten';
import ChangePassword from './pages/ChangePassword';


function App() {

  const [desiredUsername, setdesiredUsername] = useState("");
  const [user, setUser] = useState(getUser())

  return (
    <Router>
      <Navbar user={user}/>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/program' exact element={<Program />} />
        <Route path='/movie' exact element={<Movie />}/>
        <Route path='/movie/:id' exact element={<Movie />}/>
        <Route path='/login' exact element={<Login setUser={setUser} setdesiredUsername={setdesiredUsername} />} />
        <Route path='/passwordForgotten' exact element={<PasswordForgotten />} />
        <Route path='/passwordReset' exact element={<ChangePassword />} />
        <Route path='/loginStateCheck' exact element={<LoginStateCheck />} />
        <Route path='/profile' exact element={<Profile user={user} setUser={setUser} />} />
        <Route path='/profile/bookings' exact element={<UserBookings />} />
        <Route path='/register' exact element={<Register setUser={setUser} desiredUsername={desiredUsername} />} />
        <Route path='/booking' exact element={<Booking />} />
        <Route path='/booking/:filmShowID' exact element={<Booking />} />
        <Route path='/checkout' exact element={<CheckoutFields />} />
      </Routes>
    </Router>
  );
}

export default App;