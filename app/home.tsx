// app/home.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { fetchWorkouts, addExercise } from './services/supabaseService'; // Adjust this import to use Supabase
import ClientDashboard from './client-dashboard';
import CoachDashboard from './coach-dashboard';
import { ParallaxScrollView } from '@components/ParallaxScrollView';
import { ThemedText } from '@navigation/ThemedText';
import { ThemedView } from '@navigation/ThemedView';

export default function HomeScreen({ navigation }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCoach, setIsCoach] = useState(false);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const checkAuth = async () => {
      // Your authentication logic here
    };
    checkAuth();
    getExercisesFromSupabase();
  }, []);

  const addExerciseToSupabase = async (exercise) => {
    await addExercise(exercise);
  };

  const getExercisesFromSupabase = async () => {
    const exercises = await fetchWorkouts();
    setWorkouts(exercises);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('../../../assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        {!isLoggedIn ? (
          <>
            <Button
              title="Log In"
              onPress={() => navigation.navigate('LogIn')}
            />
            <Button
              title="Sign Up"
              onPress={() => navigation.navigate('SignUp')}
            />
          </>
        ) : isCoach ? (
          <CoachDashboard />
        ) : (
          <ClientDashboard />
        )}
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Text style={styles.title}>Workouts</Text>
        {workouts.map((workout) => (
          <Text key={workout.id} style={styles.workoutText}>{workout.name}</Text>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
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
