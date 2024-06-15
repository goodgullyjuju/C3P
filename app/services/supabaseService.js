// supabaseService.js
import { createClient } from '@supabase/supabase-js';

// Supabase Configuration
const supabaseUrl = 'https://vphkpvkopwpqrjdmtilt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwaGtwdmtvcHdwcXJqZG10aWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzNjkyMTMsImV4cCI6MjAzMzk0NTIxM30.1p9t2d8FGETyeJR3QQR4bW9Q9Ih2sZZxfALGYazdVA8';
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to add a workout to Supabase
export async function addWorkout(workoutData) {
  const { data, error } = await supabase.from('workouts').insert([workoutData]);
  if (error) {
    console.error('Error adding workout: ', error);
  } else {
    console.log('Workout added: ', data);
  }
}

// Function to fetch all workouts from Supabase
export async function fetchWorkouts() {
  const { data, error } = await supabase.from('workouts').select('*');
  if (error) {
    console.error('Error fetching workouts: ', error);
    return [];
  }
  return data;
}

// Function to fetch a customized workout for a client
export async function getCustomizedWorkout(clientId) {
  const { data: clientData, error: clientError } = await supabase
    .from('clients')
    .select('*')
    .eq('id', clientId)
    .single();

  if (clientError) {
    console.error('Error fetching client data: ', clientError);
    return null;
  }

  if (!clientData || !clientData.assignedWorkoutId) {
    return null; // No assigned workout for the client
  }

  const { data: workoutData, error: workoutError } = await supabase
    .from('workouts')
    .select('*')
    .eq('id', clientData.assignedWorkoutId)
    .single();

  if (workoutError) {
    console.error('Error fetching workout data: ', workoutError);
    return null;
  }

  // If there's a customized workout, merge it with the original
  if (clientData.customizedWorkout) {
    return {
      ...workoutData,
      exercises: clientData.customizedWorkout.exercises.map(customExercise => ({
        ...workoutData.exercises.find(e => e.name === customExercise.name),
        ...customExercise
      }))
    };
  } else {
    // If no customization, return the original workout
    return workoutData;
  }
}

// Function to update a client's customized workout
export async function updateCustomizedWorkout(clientId, updatedWorkout) {
  const { error } = await supabase
    .from('clients')
    .update({ customizedWorkout: updatedWorkout })
    .eq('id', clientId);

  if (error) {
    console.error('Error updating client workout: ', error);
  }
}

// Function to get video URL from Supabase Storage
export async function getVideoUrl(path) {
  const { data, error } = await supabase.storage.from('your-bucket-name').getPublicUrl(path);
  if (error) {
    console.error('Error getting video URL: ', error);
    return '';
  }
  return data.publicUrl;
}

// Example Exercise Functions
export async function addExercise(exerciseData) {
  const { data, error } = await supabase.from('exercises').insert([exerciseData]);
  if (error) {
    console.error('Error adding exercise: ', error);
  } else {
    console.log('Exercise added: ', data);
  }
}

export async function fetchExercises() {
  const { data, error } = await supabase.from('exercises').select('*');
  if (error) {
    console.error('Error fetching exercises: ', error);
    return [];
  }
  return data;
}
