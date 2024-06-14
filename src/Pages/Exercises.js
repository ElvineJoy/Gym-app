import React from 'react';
import { useParams } from 'react-router-dom';

function Exercises({ workouts, exercises }) {
  const { workoutId } = useParams();
  const workout = workouts.find(workout => workout.id === workoutId);

  const getExerciseDetails = (exerciseIds) => {
    return exerciseIds.map(id => exercises.find(exercise => String(exercise.id) === String(id)));
  };

  return (
    <div className="container mt-4">
      {workout ? (
        <>
          <h1 className="mb-4">{workout.name} - Exercises</h1>
          <p>{workout.description}</p>
          <p><strong>Duration:</strong> {workout.duration}</p>
          <ul className="list-group list-group-flush">
            {getExerciseDetails(workout.exercises).map((exercise, index) => (
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
        </>
      ) : (
        <p>Workout not found</p>
      )}
    </div>
  );
}

export default Exercises;