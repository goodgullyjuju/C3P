// screens/tabs/WorkoutListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchWorkouts } from '../../services/supabaseService'; // Update this import to use Supabase

export default function WorkoutListScreen() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // Fetch workouts from Supabase
    const loadWorkouts = async () => {
      const data = await fetchWorkouts();
      setWorkouts(data);
    };
    loadWorkouts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout List Screen</Text>
      {workouts.map(workout => (
        <Text key={workout.id} style={styles.workoutText}>{workout.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  workoutText: {
    fontSize: 18,
    marginVertical: 5,
  },
});
