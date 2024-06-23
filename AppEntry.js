// AppEntry.js

import 'expo-router/entry';

// Import additional necessary modules if needed
import 'expo-dev-client';
import { registerRootComponent } from 'expo';
import App from './app/index'; // Adjust the path if necessary

registerRootComponent(App);