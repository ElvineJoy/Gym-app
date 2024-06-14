import React from 'react'


function Workouts({workouts, exercises}) {
  const exercisesInfo = (exerciseIds) => {
    // console.log("Exercise IDs in Workout:", exerciseIds);
    // console.log("Exercises Array:", exercises);
    return exerciseIds.map(id => {
      const exercise = exercises.find(exercise => String(exercise.id) === String(id));
      if (!exercise) {
        console.error(`Exercise with ID ${id} not found`);
      }
      return exercise;
    });
  };

  return (
   <div className='container mt-4'>
    <h1 className='mb-4'>Workouts</h1>
      {workouts.length > 0 ? (
        <div className="row">
          {workouts.map(workout => (
             <div className='col-sm-6 mb-4' key={workout.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="card-title">{workout.name}</h2>
                  <p className="card-text">Description: {workout.description}</p>
                  <p className="card-text">Duration: {workout.duration}</p>
                  <h3 className="mt-4">Exercises:</h3>
                  <ul className="list-group list-group-flush">
                    {exercisesInfo(workout.exercises).map((exercise, index) => (
                      exercise ? (
                        <li className="list-group-item" key={exercise.id}>
                          <h5>{exercise.name}</h5>
                          <p>{exercise.description}</p>
                          <p><strong>Muscle Groups:</strong> {exercise.muscle_groups.join(', ')}</p>
                          <p><strong>Difficulty:</strong> {exercise.difficulty}</p>
                          <img src={exercise.image_url} alt={exercise.name} className="img-fluid" />
                        </li>
                      ) : (
                        <li className="list-group-item text-danger" key={index}>
                          Exercise not found
                        </li>
                      )
                    ))}
                  </ul>
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