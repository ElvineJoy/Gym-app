import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

function Exercises() {
  const { id } = useParams();
  const [Workout, setWorkout ] = useState(null);
  const [exercises, setExercises] = useState([]);

  const fetchExercises = (exerciseIds) => {
    Promise.all(
      exerciseIds.map(exerciseId =>
        fetch(`http://localhost:8001/exercises/${id}`)
          .then(response => response.json())
      )
    )
      .then(data => setExercises(data))     
      .catch(error => console.log(error));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8001/workouts/${id}`);
        const data = await response.json();
        setWorkout(data);
        console.log(data)
        if (data && data.exercises) {
          fetchExercises(data.exercises) // Convert IDs to strings here
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]); // Include fetchExercises in the dependency array

  if (!Workout) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1>Exercises:</h1>
      <div className="row">
        {exercises.map((exercise, index) => (
          <div key={`${exercise.id}-${index}`} className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{exercise.name}</h5>
                <p className="card-text">{exercise.description}</p>
                <p><strong>Muscle Groups:</strong> {exercise.muscle_groups.join(', ')}</p>
                <p><strong>Difficulty:</strong> {exercise.difficulty}</p>
                <img src={exercise.image_url} alt={exercise.name} className="img-fluid" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Exercises;