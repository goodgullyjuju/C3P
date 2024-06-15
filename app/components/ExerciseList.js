// ExerciseList.js
import React, { useContext } from 'react';
import { AppContext } from '../app/context/AppContext';

const ExerciseList = () => {
  const { exercises } = useContext(AppContext);

  return (
    <div>
      {exercises.map(exercise => (
        <div key={exercise.id}>{exercise.name}</div>
      ))}
    </div>
  );
};

export default ExerciseList;
