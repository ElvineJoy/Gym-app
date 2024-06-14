import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/exercise" element={<Exercise />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/exercise">Exercise</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default App;
