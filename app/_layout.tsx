// app/_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme, View, Text, StyleSheet } from 'react-native';

// Icon imports
import { Ionicons } from '@expo/vector-icons/Ionicons';  // Import Ionicons 
import { MaterialCommunityIcons } from '@expo/vector-icons/MaterialCommunityIcons';

// Custom Error Fallback Component
const ErrorFallback = () => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>Oops, something went wrong!</Text>
  </View>
);

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMonoRegular: require('@/assets/fonts/SpaceMono-Regular.ttf'),
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
      <Tabs> 
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
            headerShown: false // Hide header for the Home tab
          }}
        />
        <Tabs.Screen 
          name="exercises" 
          options={{
            tabBarLabel: 'Exercises',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="weight-lifter" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen 
          name="workouts"
          options={{
            tabBarLabel: 'Workouts',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="dumbbell" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen 
          name="profile"
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
