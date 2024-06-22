// app/_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme, View, Text, StyleSheet } from 'react-native';

SplashScreen.preventAutoHideAsync();

// Custom Error Fallback Component (simplified)
const ErrorFallback = () => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>Oops, something went wrong!</Text>
  </View>
);

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    'SpaceMonoRegular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)/index" options={{ title: "Home" }} />
        <Stack.Screen name="LogInScreen" options={{ title: "Log In" }} />
        <Stack.Screen name="SignUpScreen" options={{ title: "Sign Up" }} />
        <Stack.Screen name="ClientDashboard" options={{ title: "Client Dashboard" }} />
        <Stack.Screen name="CoachDashboard" options={{ title: "Coach Dashboard" }} />
        <Stack.Screen name="ExerciseList" options={{ title: "Exercise List" }} />
        <Stack.Screen name="ProfileScreen" options={{ title: "Profile" }} />
        <Stack.Screen name="SettingScreen" options={{ title: "Settings" }} />
        <Stack.Screen name="(tabs)/explore" options={{ title: "Explore" }} />
        <Stack.Screen name="(tabs)/exercises" options={{ title: "Exercises" }} />
        <Stack.Screen name="(tabs)/workouts" options={{ title: "Workouts" }} /> 
      </Stack>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorMessage: {
    fontSize: 16,
    marginBottom: 20,
  },
});
