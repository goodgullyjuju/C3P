// app/(tabs)/index.js
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="Explore" />
      <Tabs.Screen name="Exercises" />
      <Tabs.Screen name="Workouts" />
    </Tabs>
  );
}
