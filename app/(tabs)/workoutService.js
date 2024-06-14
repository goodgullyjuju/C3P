// workoutService.js
import { addWorkout, fetchWorkouts, getCustomizedWorkout, updateCustomizedWorkout, getVideoUrl } from './supabaseService';

// Workout Data Structure (Example)
export async function createWorkoutData() {
  try {
    const videoUrl = await getVideoUrl('path/to/your/video.mp4'); // Get URL from Supabase Storage
    return {
      name: "iFIT Workout or Weighted Walk",
      videoUrl,
      type: "cardio",
      duration: 30,
      description: "...",
      exercises: [
        { name: "Jumping Jacks", sets: 3, reps: 20, weight: null },
        // ... more exercises
      ],
    };
  } catch (error) {
    console.error("Error creating workout data: ", error);
  }
}

// Add a workout example
export async function addSampleWorkout() {
  try {
    const workoutData = await createWorkoutData();
    if (workoutData) {
      await addWorkout(workoutData);
    }
  } catch (error) {
    console.error("Error adding sample workout: ", error);
  }
}

// Fetch all workouts example
export async function getAllWorkouts() {
  try {
    return await fetchWorkouts();
  } catch (error) {
    console.error("Error fetching all workouts: ", error);
  }
}

// Fetch a customized workout for a client example
export async function getClientWorkout(clientId) {
  try {
    return await getCustomizedWorkout(clientId);
  } catch (error) {
    console.error("Error fetching client workout: ", error);
  }
}

// Update a client's customized workout example
export async function updateClientWorkout(clientId, updatedWorkout) {
  try {
    await updateCustomizedWorkout(clientId, updatedWorkout);
  } catch (error) {
    console.error("Error updating client workout: ", error);
  }
}
