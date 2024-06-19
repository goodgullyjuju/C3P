// MainApp.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './app/views/Navigator'; // Adjust the import path

export default function MainApp() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
