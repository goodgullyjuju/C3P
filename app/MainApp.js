import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigator/AppNavigator';

export default function MainApp() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
