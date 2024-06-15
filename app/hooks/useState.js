import React, { useState } from 'react';

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  const addExercise = (exercise) => {
    setExercises([...exercises, exercise]);
  };

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <div>
      {/* Your app components */}
    </div>
  );
};

export default App;
