// AppEntry.js

import 'expo-router/entry';
import App from './App'; // Make sure 'App.js' is correctly configured as your main app component

// Import additional necessary modules if needed
import 'expo-dev-client';
import { registerRootComponent } from 'expo';
import App from './app/index'; // Adjust the path if necessary

registerRootComponent(App);