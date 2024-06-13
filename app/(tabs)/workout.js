import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Your workout screen components
function WorkoutListScreen() { /* ... */ }
function WorkoutDetailsScreen() { /* ... */ }

export default function WorkoutTab() {
  return (
    <NavigationContainer independent={true}>  // Important!
      <Stack.Navigator>
        <Stack.Screen name="WorkoutList" component={WorkoutListScreen} />
        <Stack.Screen name="WorkoutDetails" component={WorkoutDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
