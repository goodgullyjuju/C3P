// app/components/Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ onPress, title, disabled }) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    pointerEvents: 'auto', // Use style.pointerEvents if needed
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    role: 'button', // Use role instead of accessibilityRole
  },
});
