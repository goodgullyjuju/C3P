// AppContext.js
import React, { createContext, useState, useEffect } from 'react';
import { fetchExercises, getAllWorkouts } from '../services/supabaseService'; // Update this import to use Supabase

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  const getExercisesFromSupabase = async () => {
    try {
      const exercises = await fetchExercises();
      setExercises(exercises);
    } catch (error) {
      console.error("Error fetching exercises: ", error);
    }
  };

  const getWorkoutsFromSupabase = async () => {
    try {
      const workouts = await getAllWorkouts();
      setWorkouts(workouts);
    } catch (error) {
      console.error("Error fetching workouts: ", error);
    }
  };

  useEffect(() => {
    getExercisesFromSupabase();
    getWorkoutsFromSupabase();
  }, []);

  return (
    <AppContext.Provider value={{ exercises, workouts }}>
      {children}
    </AppContext.Provider>
  );
};
