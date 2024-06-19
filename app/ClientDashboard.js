import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchClientWorkouts } from './services/supabaseService'; // Update this import based on your actual Supabase service
import { AppContext } from './context/AppContext';

export default function ClientDashboard() {
  const { user } = useContext(AppContext); // Assuming user information is stored in the AppContext
  const [workouts, setWorkouts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadClientWorkouts = async () => {
      if (user) {
        const data = await fetchClientWorkouts(user.id); // Fetch workouts specific to the client
        setWorkouts(data);
      }
    };
    loadClientWorkouts();
  }, [user]);

  const renderWorkoutItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('WorkoutDetails', { workoutId: item.id })}>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{item.name}</Text>
        <Text style={styles.listItemSubText}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Client Dashboard</Text>
      <Text style={styles.subtitle}>Welcome, {user ? user.name : 'Client'}!</Text>

      <Text style={styles.sectionTitle}>Upcoming Workouts</Text>
      <FlatList
        data={workouts}
        renderItem={renderWorkoutItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.emptyListText}>No upcoming workouts.</Text>}
      />

      <Button title="Profile" onPress={() => navigation.navigate('ClientProfile')} />
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
  subtitle: {
    fontSize: 18,
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
  listItemSubText: {
    fontSize: 14,
    color: '#888',
  },
  emptyListText: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#777',
  },
});
