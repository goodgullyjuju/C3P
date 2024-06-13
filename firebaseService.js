// firebaseService.js
// firebaseService.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

// Firebase Configuration
const firebaseConfig = {
  // ...your Firebase project configuration...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

// Function to add a workout to Firestore
export async function addWorkout(workoutData) {
  try {
    const docRef = await addDoc(collection(firestore, "workouts"), workoutData);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

// Function to fetch all workouts from Firestore
export async function fetchWorkouts() {
  const querySnapshot = await getDocs(collection(firestore, "workouts"));
  const workouts = [];
  querySnapshot.forEach((doc) => {
    workouts.push({ id: doc.id, ...doc.data() });
  });
  return workouts;
}

// Function to fetch a customized workout for a client
export async function getCustomizedWorkout(clientId) {
  const clientDoc = await getDoc(doc(firestore, "clients", clientId));
  const clientData = clientDoc.data();

  if (!clientData || !clientData.assignedWorkoutId) {
    return null; // No assigned workout for the client
  }

  const originalWorkoutDoc = await getDoc(doc(firestore, "workouts", clientData.assignedWorkoutId));
  const originalWorkoutData = originalWorkoutDoc.data();

  // If there's a customized workout, merge it with the original
  if (clientData.customizedWorkout) {
    return {
      ...originalWorkoutData,
      exercises: clientData.customizedWorkout.exercises.map(customExercise => ({
        ...originalWorkoutData.exercises.find(e => e.name === customExercise.name),
        ...customExercise
      }))
    };
  } else {
    // If no customization, return the original workout
    return originalWorkoutData; 
  }
}

// Function to update a client's customized workout
export async function updateCustomizedWorkout(clientId, updatedWorkout) {
  try {
    await updateDoc(doc(firestore, "clients", clientId), { customizedWorkout: updatedWorkout });
  } catch (error) {
    console.error("Error updating document: ", error);
  }
}

// Function to get video URL from Firebase Storage
export async function getVideoUrl(path) {
  try {
    return await getDownloadURL(ref(storage, path));
  } catch (error) {
    console.error("Error getting video URL: ", error);
  }
}

// Example Exercise Functions
export async function addExercise(exerciseData) {
  try {
    const docRef = await addDoc(collection(firestore, "exercises"), exerciseData);
    console.log("Exercise added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding exercise: ", error);
  }
}

export async function fetchExercises() {
  const querySnapshot = await getDocs(collection(firestore, "exercises"));
  const exercises = [];
  querySnapshot.forEach((doc) => {
    exercises.push({ id: doc.id, ...doc.data() });
  });
  return exercises;
}
