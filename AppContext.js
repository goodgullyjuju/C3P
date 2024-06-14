// AppContext.js
import React, { createContext, useState, useEffect } from 'react';
import { fetchExercises, getAllWorkouts } from './firebaseService';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  const getExercisesFromFirebase = async () => {
    try {
      const exercises = await fetchExercises();
      setExercises(exercises);
    } catch (error) {
      console.error("Error fetching exercises: ", error);
    }
  };

  const getWorkoutsFromFirebase = async () => {
    try {
      const workouts = await getAllWorkouts();
      setWorkouts(workouts);
    } catch (error) {
      console.error("Error fetching workouts: ", error);
    }
  };

  useEffect(() => {
    getExercisesFromFirebase();
    getWorkoutsFromFirebase();
  }, []);

  return (
    <AppContext.Provider value={{ exercises, workouts }}>
      {children}
    </AppContext.Provider>
  );
};
