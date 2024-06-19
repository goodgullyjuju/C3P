// app/components/Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Use boxShadow instead of shadow properties
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
