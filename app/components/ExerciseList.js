// app/components/ExerciseList.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ExerciseList = ({ exercises }) => { // Receive exercises as a prop
  

  return (
    <View style={styles.container}>
      {exercises.length > 0 ? (
        exercises.map((exercise, index) => (
          <View key={index} style={styles.exerciseItem}>
            <Text style={styles.exerciseText}>{exercise.name}</Text>
          </View>
        ))
      ) : (
        <Text>No exercises available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  exerciseItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  exerciseText: {
    fontSize: 16,
  },
});

export default ExerciseList;
