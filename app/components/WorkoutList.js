import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';const WorkoutList = ({ workouts }) => {
    return (
      <div>
        {workouts.map((workout) => (
          <div key={workout.id}>
            <h3>{workout.name}</h3>
            <p>{workout.description}</p>
            <ul>
              {workout.exercises.map((exercise) => (
                <li key={exercise.exerciseId}>
                  {exercise.exerciseId} - Sets: {exercise.sets}, Reps: {exercise.reps}, Weight: {exercise.weight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  export default WorkoutList; 