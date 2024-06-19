import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchClients, fetchWorkouts } from './services/supabaseService'; // Adjust this import based on your actual Supabase service

export default function CoachDashboard() {
  const [clients, setClients] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadClientsAndWorkouts = async () => {
      const clientsData = await fetchClients(); // Fetch clients from Supabase
      const workoutsData = await fetchWorkouts(); // Fetch workouts from Supabase
      setClients(clientsData);
      setWorkouts(workoutsData);
    };
    loadClientsAndWorkouts();
  }, []);

  const renderClientItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ClientDetails', { clientId: item.id })}>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderWorkoutItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('WorkoutDetails', { workoutId: item.id })}>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coach Dashboard</Text>
      
      <Text style={styles.sectionTitle}>Clients</Text>
      <FlatList
        data={clients}
        renderItem={renderClientItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyListText}>No clients found.</Text>}
      />

      <Text style={styles.sectionTitle}>Workouts</Text>
      <FlatList
        data={workouts}
        renderItem={renderWorkoutItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyListText}>No workouts found.</Text>}
      />

      <Button title="Add New Client" onPress={() => navigation.navigate('AddClient')} />
      <Button title="Add New Workout" onPress={() => navigation.navigate('AddWorkout')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItemText: {
    fontSize: 16,
  },
  emptyListText: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#777',
  },
});
