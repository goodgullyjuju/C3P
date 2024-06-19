// app/(tabs)/index.js
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="explore" />
      <Tabs.Screen name="workout" />
      <Tabs.Screen name="workout-details" />
    </Tabs>
  );
}
