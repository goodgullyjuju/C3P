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
    </Stack>
  );
}
