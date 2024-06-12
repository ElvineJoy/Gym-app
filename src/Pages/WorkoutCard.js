import React from 'react'

function WorkoutCard({workout}) {
  return (
    <div>
        <h1>{workout.name}</h1>
        <p>Description: {workout.description}</p>
        <p>Time required: {workout.duration}</p>
        <p>Exercises : {workout.exercises}</p>
    </div>
  )
}

export default WorkoutCard