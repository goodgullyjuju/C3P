import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create a stack navigator
const Stack = createNativeStackNavigator();

// Define your screens
function HomeScreen() {
  return (
    // Content of the Home screen
  );
}

function DetailsScreen() {
  return (
    // Content of the Details screen
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
