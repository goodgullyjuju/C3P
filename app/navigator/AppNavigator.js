// AppNavigator.js
// app/navigator/AppNavigator.js

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Your Screen Components (Replace with your actual component names)
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ClientDashboard from '../screens/ClientDashboard';
import CoachDashboard from '../screens/CoachDashboard';

import { addExercise, fetchExercises } from '@/services/supabaseService';

// HomeScreen component (moved inside AppNavigator.js)
function HomeScreen({ navigation }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCoach, setIsCoach] = useState(false);
  const [exercises, setExercises] = useState([]);

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
    const exercises = await fetchExercises();
    setExercises(exercises);
  };

  return (
    <View style={styles.container}>
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

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />

      {/* Add other screens for navigation within the stack (e.g., WorkoutListScreen, WorkoutDetailsScreen) */}
      {/* Example:
      <Stack.Screen name="WorkoutList" component={WorkoutListScreen} />
      <Stack.Screen name="WorkoutDetails" component={WorkoutDetailsScreen} />
      */}
    </Stack.Navigator>
  );
}

// Styles (Unchanged)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
