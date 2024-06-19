// app/views/Navigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../home';
import Login from '../login';
import Signup from '../signup';
import ClientDashboard from '../client-dashboard';
import CoachDashboard from '../coach-dashboard';
import Profile from '../profile';
import Settings from '../settings';
import ExerciseList from '../exercise-list';
import WorkoutDetails from '../tabs/workout-details';
import Progress from '../progress';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="client-dashboard" component={ClientDashboard} />
      <Stack.Screen name="coach-dashboard" component={CoachDashboard} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="settings" component={Settings} />
      <Stack.Screen name="exercise-list" component={ExerciseList} />
      <Stack.Screen name="workout-details" component={WorkoutDetails} />
      <Stack.Screen name="progress" component={Progress} />
    </Stack.Navigator>
  );
}
