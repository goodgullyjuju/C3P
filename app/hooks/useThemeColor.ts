// app/hooks/useThemeColor.ts
import { useTheme } from '@react-navigation/native';

type ThemeColors = {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
};

type Colors = {
  light: ThemeColors;
  dark: ThemeColors;
};

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof ThemeColors
) {
  const theme = useTheme();
  const colorFromProps = props[theme.dark ? 'dark' : 'light'];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return theme.colors[colorName];
  }
}
