//app/HomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, Platform } from 'react-native';
import { fetchWorkouts, addExercise } from './services/supabaseService'; // Ensure this path is correct
import ClientDashboard from './ClientDashboard';
import CoachDashboard from './CoachDashboard';
import ParallaxScrollView from './components/ParallaxScrollView'; // Ensure this path is correct
import { ThemedText } from './components/navigation/ThemedText'; // Ensure this path is correct
import { ThemedView } from './components/navigation/ThemedView'; // Ensure this path is correct
import HelloWave from './components/HelloWave'; // Ensure this path is correct

// Define types for navigation, exercise, and workouts
interface NavigationProps {
  navigate: (screen: string) => void;
}

interface Exercise {
  exerciseId: string;
  sets: number;
  reps: number;
  weight: number;
}

interface Workout {
  id: string;
  name: string;
  exercises: Exercise[];
}

interface Props {
  navigation: NavigationProps;
}

export default function HomeScreen({ navigation }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCoach, setIsCoach] = useState(false);
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const checkAuth = async () => {
      // Your authentication logic here
    };
    checkAuth();
    getExercisesFromSupabase();
  }, []);

  const addExerciseToSupabase = async (exercise: Exercise) => {
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
          source={require('../assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/home.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
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
