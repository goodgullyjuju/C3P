


// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './app/context/AppContext';
import AppNavigator from './app/navigator/AppNavigator';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
