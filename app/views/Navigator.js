// app/views/Navigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../home';
import LogInScreen from '../login';
import SignUpScreen from '../signup';
import ClientDashboard from '../client-dashboard';
import CoachDashboard from '../coach-dashboard';
import ProfileScreen from '../profile';
import SettingsScreen from '../settings';
import WorkoutListScreen from '../exercise-list';
import WorkoutDetailsScreen from '../(tabs)/workout-details';
import ProgressScreen from '../screens/ProgressScreen';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ClientDashboard" component={ClientDashboard} />
      <Stack.Screen name="CoachDashboard" component={CoachDashboard} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="WorkoutList" component={WorkoutListScreen} />
      <Stack.Screen name="WorkoutDetails" component={WorkoutDetailsScreen} />
      <Stack.Screen name="Progress" component={ProgressScreen} />
    </Stack.Navigator>
  );
}
