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
    'SpaceMonoRegular': require('../assets/fonts/SpaceMono-Regular.ttf'), // Correct the path to the font file
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
      {/* Removed the router prop from Stack  */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
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
