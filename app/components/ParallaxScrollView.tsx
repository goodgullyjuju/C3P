// app/components/ParallaxScrollView.tsx
import React from 'react';
import { ScrollView, View, ImageBackground, StyleSheet } from 'react-native';

const ParallaxScrollView = ({ children, headerImage, headerBackgroundColor }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <ImageBackground source={headerImage} style={[styles.header, { backgroundColor: headerBackgroundColor }]}>
        <View style={styles.headerContent}>
          {headerImage}
        </View>
      </ImageBackground>
      <View style={styles.content}>
        {children}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  header: {
    height: 200,
  },
  headerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default ParallaxScrollView;
