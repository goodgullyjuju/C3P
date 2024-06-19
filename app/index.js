// app/index.js
import { Stack } from 'expo-router';

export default function Index() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ title: "Home" }} />
      <Stack.Screen name="login" options={{ title: "Log In" }} />
      <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
      <Stack.Screen name="client-dashboard" options={{ title: "Client Dashboard" }} />
      <Stack.Screen name="coach-dashboard" options={{ title: "Coach Dashboard" }} />
      <Stack.Screen name="exercise-list" options={{ title: "Exercise List" }} />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
      <Stack.Screen name="settings" options={{ title: "Settings" }} />
      <Stack.Screen name="(tabs)/index" options={{ title: "Tabs" }} />
      <Stack.Screen name="(tabs)/explore" options={{ title: "Explore" }} />
      <Stack.Screen name="(tabs)/workout" options={{ title: "Workout" }} />
      <Stack.Screen name="(tabs)/workout-details" options={{ title: "Workout Details" }} />
      <Stack.Screen name="(tabs)/workout-tab" options={{ title: "Workout Tab" }} />
    </Stack>
  );
}

