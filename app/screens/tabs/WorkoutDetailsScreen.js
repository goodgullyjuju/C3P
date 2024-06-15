import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getCustomizedWorkout } from './supabaseService'; // Import the function from supabaseService

export default function WorkoutDetailsScreen({ route }) {
  const { workoutId } = route.params;
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    const fetchWorkoutDetails = async () => {
      const workoutDetails = await getCustomizedWorkout(workoutId);
      setWorkout(workoutDetails);
    };
    fetchWorkoutDetails();
  }, [workoutId]);

  if (!workout) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.name}</Text>
      <Text>{workout.description}</Text>
      <Text>{`Duration: ${workout.duration} mins`}</Text>
      <Text>Exercises:</Text>
      {workout.exercises.map((exercise, index) => (
        <Text key={index}>{`${exercise.name}: ${exercise.sets} sets of ${exercise.reps}`}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
