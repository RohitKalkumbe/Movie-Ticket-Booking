import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
 import Login from './components/Login';
 import Register from './components/Register';
 import Movies from './components/Movies';
// import Seats from './components/Seats';
// import Payment from './components/Payment';
// import Status from './components/Status';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5" style={{width : "100%", position:"fixed"}}>
        <Link className="navbar-brand" to="/login">Movie Booking</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies">Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Logout</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
         <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/movies" element={<Movies/>} />
        {/* <Route path="/seats/:movieId" element={<Seats />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/status" element={<Status />} /> */}
      </Routes>
    </div>
  );
}

export default App;
