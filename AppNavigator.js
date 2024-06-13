// AppNavigator.js
import * as React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';
import { fetchWorkouts, getClientWorkout } from './firebaseService';

const Stack = createNativeStackNavigator();

// Define your screens
function HomeScreen({ navigation }) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // Fetch workouts from Firestore
    const loadWorkouts = async () => {
      const data = await fetchWorkouts();
      setWorkouts(data);
    };
    loadWorkouts();
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
      {workouts.map(workout => (
        <Text key={workout.id}>{workout.name}</Text>
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
    <View>
      <Text>Details Screen</Text>
      {workout ? (
        <Text>{workout.name}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

