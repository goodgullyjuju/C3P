import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, addDoc, getDocs, updateDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

// 1. Firebase Configuration
const firebaseConfig = {
  // ...your Firebase project configuration...
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app); // For video URLs

// 2. Workout Data Structure (Example)
const workoutData = {
  name: "iFIT Workout or Weighted Walk",
  videoUrl: await getDownloadURL(ref(storage, 'path/to/your/video.mp4')), // Get URL from Firebase Storage
  type: "cardio",
  duration: 30,
  description: "...",
  exercises: [
    { name: "Jumping Jacks", sets: 3, reps: 20, weight: null },
    // ... more exercises
  ],
};

// 3. Function to Add a Workout to Firestore
async function addWorkout(workoutData) {
  try {
    const docRef = await addDoc(collection(firestore, "workouts"), workoutData);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

// 4. Function to Fetch All Workouts from Firestore
async function fetchWorkouts() {
  const querySnapshot = await getDocs(collection(firestore, "workouts"));
  const workouts = [];
  querySnapshot.forEach((doc) => {
    workouts.push({ id: doc.id, ...doc.data() });
  });
  return workouts;
}

// 5. Function to Fetch a Customized Workout for a Client
async function getCustomizedWorkout(clientId) {
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

// 6. Function to Update a Client's Customized Workout
async function updateCustomizedWorkout(clientId, updatedWorkout) {
  try {
    await updateDoc(doc(firestore, "clients", clientId), { customizedWorkout: updatedWorkout });
  } catch (error) {
    console.error("Error updating document: ", error);
  }
}

// Example Usage (after a client with 'clientId1' has been assigned 'workoutId1'):
addWorkout(workoutData); 

getCustomizedWorkout('clientId1').then(workout => {
  console.log(workout); 
});
