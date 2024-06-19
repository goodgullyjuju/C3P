// MainApp.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() { // Renamed from MainApp to App
  return (
    <NavigationContainer>
      {/* 
        Do not include a <Navigator> component here.
        Expo Router will handle the navigation based on your app's directory structure.
      */}
    </NavigationContainer>
  );
}

