import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { fetchWorkouts, getClientWorkout } from './services/supabaseService'; // Adjust the import
import { useRouter, useSearchParams } from 'expo-router';

export default function Workouts() {
  const router = useRouter();
  const { id } = useSearchParams(); // Get workout ID from the URL
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  useEffect(() => {
    const loadWorkouts = async () => {
      const data = await fetchWorkouts();
      setWorkouts(data);
    };

    const loadSelectedWorkout = async () => {
      if (id) {
        const data = await getClientWorkout(id);
        setSelectedWorkout(data);
      }
    };

    loadWorkouts();
    loadSelectedWorkout();
  }, [id]); // Fetch data again if workout ID changes

  const renderWorkoutItem = ({ item }) => (
    <TouchableOpacity onPress={() => router.push(`/workouts/${item.id}`)}> 
      <View style={styles.workoutItem}>
        <Text style={styles.workoutName}>{item.name}</Text>
        {/* ... (display other workout details if needed) */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {selectedWorkout ? (
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{selectedWorkout.name}</Text>
          {/* ... (display detailed workout info and exercises) */}
        </View>
      ) : (
        <>
          <Text style={styles.title}>Workouts</Text>
          <FlatList
            data={workouts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderWorkoutItem}
          />
        </>
      )}
    </View>
  );
}

// ... (styles - you might need to adjust these for the combined view)
