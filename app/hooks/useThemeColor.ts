// app/hooks/useThemeColor.ts
import { useContext } from 'react';
import { ThemeContext } from '@react-navigation/native';

type Colors = {
  light: { [key: string]: string };
  dark: { [key: string]: string };
};

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof Colors['light'] & keyof Colors['dark']
) {
  const theme = useContext(ThemeContext);
  const colorFromProps = props[theme.dark ? 'dark' : 'light'];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return theme.colors[colorName];
  }
}
