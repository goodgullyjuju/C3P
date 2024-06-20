// app/components/HelloWave.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelloWave = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👋</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 50,
  },
});

export default HelloWave;
