import 'expo-dev-client';
import { registerRootComponent } from 'expo';
import React from 'react';
import { Text, View } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Cover3 Performance App!</Text>
    </View>
  );
}

export default App;

registerRootComponent(App);
