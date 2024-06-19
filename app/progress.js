// screens/ProgressScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchClientProgress } from './services/supabaseService'; // Update this import based on your actual service

export default function ProgressScreen() {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const loadProgress = async () => {
      const data = await fetchClientProgress('clientId'); // Replace 'clientId' with actual client ID
      setProgress(data);
    };
    loadProgress();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Screen</Text>
      {progress ? (
        <Text style={styles.progressText}>{progress.details}</Text> // Adjust according to the actual data structure
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  progressText: {
    fontSize: 18,
    marginVertical: 5,
  },
});
