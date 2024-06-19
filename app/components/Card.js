import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Card({ children }) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', // Use boxShadow instead of shadow*
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});


