// WorkoutListScreen.js
// app/screens/tabs/WorkoutListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { fetchWorkouts } from '../../services/supabaseService'; // Corrected import path

export default function WorkoutListScreen({ navigation }) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkoutsList = async () => {
      const fetchedWorkouts = await fetchWorkouts();
      setWorkouts(fetchedWorkouts);
    };
    fetchWorkoutsList();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('WorkoutDetails', { workoutId: item.id })}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});


