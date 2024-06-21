import React, { useState, useEffect } from 'react';
import { fetchExercises } from '@/services/supabaseService';
import ExerciseList from '@/components/ExerciseList'; // Import the component

export default function ExerciseListScreen() {

  
    const [exercises, setExercises] = useState([]);
  useEffect(() => {
    const loadExercises = async () => {
      const data = await fetchExercises();
      setExercises(data);
    };
    loadExercises();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise List</Text>
      <ExerciseList exercises={exercises} />  {/* Pass exercises as prop */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
  },
});


