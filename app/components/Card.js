import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card({ title, content }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Use boxShadow instead of shadow properties
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
  },
});



