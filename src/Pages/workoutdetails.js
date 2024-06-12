// WorkoutCard.js
import React from 'react';

function WorkoutCard({ workout }) {
  return (
    <div className="workout-card">
      <h3>{workout.name}</h3>
      <p>Duration: {workout.duration} minutes</p>
      <p>Intensity Level: {workout.intensityLevel}</p>
    </div>
  );
}

export default WorkoutCard;