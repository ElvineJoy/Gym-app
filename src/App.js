import './App.css';
import Home from './Pages/Home';
import Workouts from './Pages/Workouts';
import Login from './Components/Login';
import Signup from './Components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    fetch("http://localhost:8001/workouts")
    .then (r => r.json())
    .then (workouts => setWorkouts(workouts))
    .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    fetch("http://localhost:8001/exercises")
    .then (r => r.json())
    .then (exercises => setExercises(exercises))
    .catch(error => console.log(error))
  }, [])



  return (
    <div>
      <Home />
      <Workouts workouts={workouts} exercises={exercises}/>
      <Login />
      <Signup />
    </div>
  );
}

export default App;
