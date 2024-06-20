// app/components/ParallaxScrollView.tsx
import React, { ReactNode } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

type ParallaxScrollViewProps = {
  children: ReactNode;
  headerImage: ReactNode;
  headerBackgroundColor: { light: string; dark: string };
};

const ParallaxScrollView = ({ children, headerImage, headerBackgroundColor }: ParallaxScrollViewProps) => {
  return (
    <ScrollView>
      <View style={[styles.header, { backgroundColor: headerBackgroundColor.light }]}>
        {headerImage}
      </View>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 200,
  },
});

export default ParallaxScrollView;
