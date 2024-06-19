// app/components/navigation/ThemedView.tsx
import React from 'react';
import { View, StyleSheet, type ViewProps } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor'; // Adjust the path as needed

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (
    <View
      style={[{ backgroundColor }, styles.view, style]}
      role="region" // Use role for accessibility
      pointerEvents="auto" // Use style.pointerEvents if needed
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default ThemedView;
