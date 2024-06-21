// app/_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, ErrorBoundary as RouterErrorBoundary, type ErrorBoundaryProps } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme, View, Text, Button, StyleSheet } from 'react-native';

SplashScreen.preventAutoHideAsync();

// Custom Error Boundary Fallback Component with Types
const ErrorFallback: React.FC<ErrorBoundaryProps> = ({ error, resetErrorBoundary }) => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>Oops, something went wrong!</Text>
    <Text style={styles.errorMessage}>{error.message}</Text>
    <Button title="Try Again" onPress={resetErrorBoundary} />
  </View>
);

export default function RootLayout() {
  // ... (colorScheme, loaded, and useEffect logic remain the same)

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RouterErrorBoundary FallbackComponent={ErrorFallback}> 
        <Stack>
          <Stack.Screen name="home" options={{ headerShown: false }} />
          {/* Define other screens here if needed */}
        </Stack>
      </RouterErrorBoundary>
    </ThemeProvider>
  );
}

// ... (styles remain the same)


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
}