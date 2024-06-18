// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { fetchWorkouts } from '../services/supabaseService'; // Update this import to use Supabase

export default function HomeScreen({ navigation }) {
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
      <Image source={require('../../assets/images/C3Plogo.png')} style={styles.logo} />
      <Text style={styles.title}>Home Screen</Text>
      {workouts.map(workout => (
        <Text key={workout.id} style={styles.workoutText}>{workout.name}</Text>
      ))}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
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
  logo: {
    width: 100,  // Adjust the width as needed
    height: 100, // Adjust the height as needed
    marginBottom: 20,
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
