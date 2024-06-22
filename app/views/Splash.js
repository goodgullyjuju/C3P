// app/views/Splash.js
import React, { useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';

// Your app's logo (replace with your actual logo)
const logo = require('../../assets/images/Cover3PerformanceApp.png');

const SplashScreenComponent = () => {
  const navigation = useNavigation();
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Fade-in duration (1 second)
      useNativeDriver: true,
    }).start(() => {
      // After fade-in, navigate to the main screen
      setTimeout(() => {
        navigation.navigate('index');
        SplashScreen.hideAsync();
      }, 500); // Delay before navigating (0.5 seconds)
    });
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={logo}
        style={[styles.logo, { opacity: fadeAnim }]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Background color (customize)
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust logo size as needed
    height: 200,
  },
});

export default SplashScreenComponent;
