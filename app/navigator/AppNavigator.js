// AppNavigator.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { fetchWorkouts, getClientWorkout } from '../services/supabaseService'; // Update this import to use Supabase

const Stack = createNativeStackNavigator();

// Define your screens
function HomeScreen({ navigation }) {
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
      <Image source={require('../assets/images/C3P logo.png')} style={styles.logo} />
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

function DetailsScreen() {
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
      <Text style={styles.title}>Details Screen</Text>
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

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

