import './App.css';
import Exercises from './Pages/Exercises';
import Home from './Pages/Home';
import Workouts from './Pages/Workouts';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/workouts")
    .then (r => r.json())
    .then (workouts => setWorkouts(workouts))
  }, [])


  return (
    <div>
      <Home />
      <Workouts workouts={workouts}/>
      <Exercises />
    </div>
  );
}

export default App;
