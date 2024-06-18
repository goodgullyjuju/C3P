// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WorkoutDetailsScreen from '../screens/tabs/WorkoutDetailsScreen';
import SignInScreen from '../screens/SignInScreen';
import ClientDashboard from '../screens/ClientDashboard';
import CoachDashboard from '../screens/CoachDashboard';
import ExerciseListScreen from '../screens/ExerciseListScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={WorkoutDetailsScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ClientDashboard" component={ClientDashboard} />
        <Stack.Screen name="CoachDashboard" component={CoachDashboard} />
        <Stack.Screen name="ExerciseList" component={ExerciseListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
