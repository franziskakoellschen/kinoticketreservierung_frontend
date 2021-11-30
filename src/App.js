import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Program from './pages/program';
import MoviePage from './pages/movie';
import Signup from './pages/singup';
import Signin from './pages/signin';
import Booking from './pages/booking';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/program' exact element={<Program />} />
        <Route path='/movie' exact element={<MoviePage />} />
        <Route path='/sign-up' exact element={<Signup />} />
        <Route path='/signin' exact element={<Signin />} />
        <Route path='/booking' exact element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;