import React from 'react'
import WorkoutCard from './WorkoutCard'

function Workouts({workouts}) {
  const workoutList = workouts.map((workout => {
    return (
      < WorkoutCard
        key = {workout.id}
        workout = {workout}
      />
    )
  }))
  return (
   <div>
    {workoutList}
    </div>
  )
}

export default Workouts