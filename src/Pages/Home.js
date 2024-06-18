import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Home() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/workouts")
    .then (r => r.json())
    .then (workouts => setWorkouts(workouts))
    .catch(error => console.log(error))
  }, [])


  return (
    <>
      <div className="container mt-4">
        {/* <header>Welcome to our all fitness Gym!!</header> */}
        <img className="container-fluid mx-auto mt-0" src={require('../images/gym-101.jpg')} alt="fitness101" />
        <h1 className='text-center'>Workouts</h1>
          <div className="row mt-5">
            {workouts.map(workout => (
              <div key={workout.id} className="col-md-4 d-flex align-items-stretch">
                <div className="card mb-4 shadow-sm">
                   <div className="card-body">
                    <h5 className="card-title">{workout.name}</h5>
                      <p className="card-text">{workout.description}</p>
                      <Link to={`/workouts/${workout.id}`} className="btn btn-primary">
                        View Exercises
                      </Link>
                  </div>
                </div>
              </div>
        ))}
          </div>
        </div>
    </>
  );
}

export default Home