// app/Index.js
import React from 'react';
import { Stack } from 'expo-router';
import { Image, StyleSheet, Platform } from 'react-native';

import HelloWave from '@/components/HelloWave'; // Use @/ for absolute path

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '../components/navigation/ThemedText';
import { ThemedView } from '../components/navigation/ThemedView';

export default function Index() {
  return (
    <Stack>
      <Stack.Screen name="HomeScreen" options={{ title: "HomeScreen" }}>
        {() => (
          <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
              <Image
                source={require('../assets/images/partial-react-logo.png')}
                style={styles.reactLogo}
              />
            }
          >
            <ThemedView style={styles.titleContainer}>
              <ThemedText type="title">Welcome!</ThemedText>
              <HelloWave />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
              <ThemedText type="subtitle">Step 1: Try it</ThemedText>
              <ThemedText>
                Edit <ThemedText type="defaultSemiBold">app/index.js</ThemedText> to see changes.
                Press{' '}
                <ThemedText type="defaultSemiBold">
                  {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
                </ThemedText>{' '}
                to open developer tools.
              </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
              <ThemedText type="subtitle">Step 2: Explore</ThemedText>
              <ThemedText>
                Tap the Explore tab to learn more about what's included in this starter app.
              </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
              <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
              <ThemedText>
                When you're ready, run{' '}
                <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
                <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
                <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
                <ThemedText type="defaultSemiBold">app-example</ThemedText>.
              </ThemedText>
            </ThemedView>
          </ParallaxScrollView>
        )}
      </Stack.Screen>
      <Stack.Screen name="LogInScreen" options={{ title: "Log In" }} />
      <Stack.Screen name="SignUpScreen" options={{ title: "Sign Up" }} />
      <Stack.Screen name="ClientDashboard" options={{ title: "Client Dashboard" }} />
      <Stack.Screen name="CoachDashboard" options={{ title: "Coach Dashboard" }} />
      <Stack.Screen name="ExerciseList" options={{ title: "Exercise List" }} />
      <Stack.Screen name="ProfileScreen" options={{ title: "Profile" }} />
      <Stack.Screen name="SettingScreen" options={{ title: "Settings" }} />
      <Stack.Screen name="(tabs)/Index" options={{ title: "Tabs" }} />
      <Stack.Screen name="(tabs)/ExploreScreen" options={{ title: "Explore" }} />
      <Stack.Screen name="(tabs)/exercises" options={{ title: "Exercises" }} />
      <Stack.Screen name="(tabs)/workouts" options={{ title: "Workouts" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
