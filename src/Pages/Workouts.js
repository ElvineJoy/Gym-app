import React from 'react'
import { Link } from 'react-router-dom';

function Workouts({workouts}) {

  return (
   <div className='container mt-4'>
    <h1 className='mb-4'>Workouts</h1>
      {workouts.length > 0 ? (
        <div className="row">
          {workouts.map(workout => (
             <div className='col-sm-6 mb-4' key={workout.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="card-title">
                    <Link to = {`/workouts/${workout.id}`}>{workout.name}</Link>
                  </h2>
                  <p className="card-text">Description: {workout.description}</p>
                  <p className="card-text"><strong>Duration:</strong>{workout.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No workouts available</p>
      )}
    </div>
  );
}
export default Workouts