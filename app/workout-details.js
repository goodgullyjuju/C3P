
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getClientWorkout } from './services/supabaseService'; // Update this import to use Supabase

export default function workout_details() {
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    // Fetch a customized workout for a client (replace 'clientId' with actual client ID)
    const loadWorkout = async () => {
      const data = await getClientWorkout('clientId');
      setWorkout(data);
    };
    loadWorkout();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Details Screen</Text>
      {workout ? (
        <Text style={styles.workoutText}>{workout.name}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
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
