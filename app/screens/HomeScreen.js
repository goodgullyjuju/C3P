// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { fetchWorkouts, addExercise } from '../services/supabaseService'; // Adjust this import to use Supabase
import ClientDashboard from '../client-dashboard';
import CoachDashboard from '../coach-dashboard';

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
    <View style={styles.container}>
      <Image source={require('../../assets/images/C3Plogo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Cover3 Performance App</Text>
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
