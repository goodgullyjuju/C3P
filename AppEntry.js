// AppEntry.js
import 'expo-router/entry';
import 'expo-dev-client';
import { registerRootComponent } from 'expo';
import App from './App'; // Ensure this path is correct and points to your main App component

registerRootComponent(App);
