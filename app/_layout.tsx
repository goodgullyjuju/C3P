// app/_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Tabs } from 'expo-router'; // Ensure expo-router is installed
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme, View, Text, StyleSheet } from 'react-native';
import { useAssets } from 'expo-asset';  // Import useAssets

// Icon imports
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Custom Error Fallback Component
const ErrorFallback = () => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>Oops, something went wrong!</Text>
  </View>
);

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

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMonoRegular: require('../assets/fonts/SpaceMono-Regular.ttf'), // Ensure the path is correct
  });

  const [assets, error] = useAssets([require('../assets/fonts/SpaceMono-Regular.ttf')]);

  useEffect(() => {
    if (loaded && assets) {
      SplashScreen.hideAsync();
    }
  }, [loaded, assets]);

  if (!loaded || !assets) { // Check if both fonts and assets are loaded
    return null;
  }

  // Error handling for asset loading
  if (error) {
    console.error("Error loading assets:", error);
    // You might want to display an error message or fallback UI here.
    return <Text>Error loading assets!</Text>; 
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
            headerShown: false // Hide header for the Home tab
          }}
        />
        <Tabs.Screen 
          name="exercises" 
          options={{
            tabBarLabel: 'Exercises',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <MaterialCommunityIcons name="weight-lifter" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen 
          name="workouts"
          options={{
            tabBarLabel: 'Workouts',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <MaterialCommunityIcons name="dumbbell" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen 
          name="profile"
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="person-circle" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
