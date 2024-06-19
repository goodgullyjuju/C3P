import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { fetchWorkouts } from '../services/supabaseService'; // Adjust this import based on your actual service
import { AppContext } from '../context/AppContext';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);
  const { exercises } = useContext(AppContext);

  useEffect(() => {
    const loadWorkouts = async () => {
      const data = await fetchWorkouts();
      setWorkouts(data);
    };
    loadWorkouts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workouts</Text>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.workoutItem}>
            <Text style={styles.workoutName}>{item.name}</Text>
            <Text>{item.description}</Text>
            <FlatList
              data={item.exercises}
              keyExtractor={(exercise) => exercise.exerciseId.toString()}
              renderItem={({ item: exercise }) => (
                <Text>
                  {exercise.exerciseId} - Sets: {exercise.sets}, Reps: {exercise.reps}, Weight: {exercise.weight}
                </Text>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

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
  workoutItem: {
    fontSize: 18,
    marginVertical: 5,
  },
  workoutName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default WorkoutList;
