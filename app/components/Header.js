// app/components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', // Use boxShadow instead of shadow*
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
