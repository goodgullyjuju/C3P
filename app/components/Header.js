// app/components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007BFF',
    padding: 20,
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Use boxShadow instead of shadow properties
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
