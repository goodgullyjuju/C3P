import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('AnotherScreen'); // Change 'AnotherScreen' to the actual screen name you want to navigate to
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <Text style={styles.subtitle}>This is your starting point.</Text>
      <Button title="Go to Another Screen" onPress={handleNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
});

export default HomeScreen;
