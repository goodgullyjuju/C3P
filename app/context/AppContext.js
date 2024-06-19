// app/context/AppContext.js

import React, { createContext, useState, useEffect } from 'react';
import { fetchExercises, getAllWorkouts, supabase } from '../services/supabaseService'; // Ensure supabase is properly imported

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCoach, setIsCoach] = useState(false);
  const [user, setUser] = useState(null);

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

  const addExercise = (exercise) => {
    setExercises((prevExercises) => [...prevExercises, exercise]);
  };

  const addWorkout = (workout) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
  };

  useEffect(() => {
    getExercisesFromSupabase();
    getWorkoutsFromSupabase();
  }, []);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
      if (session) {
        setUser(session.user);
        // Logic to determine if the user is a coach
      }
    };

    checkAuthStatus();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      checkAuthStatus();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AppContext.Provider value={{ exercises, workouts, isLoggedIn, isCoach, user, addExercise, addWorkout }}>
      {children}
    </AppContext.Provider>
  );
};

