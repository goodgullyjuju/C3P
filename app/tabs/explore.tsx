import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/navigation/ThemedText';
import { ThemedView } from '@/components/navigation/ThemedView';

export default function explore() {
  return (
    <ThemedView style={styles.container}>
      <ParallaxScrollView
        headerImage={<View style={styles.header} />}
        headerBackgroundColor={{ dark: '#000', light: '#fff' }}
      >
        <ScrollView>
          <ThemedText style={styles.title}>Explore</ThemedText>
          <Collapsible title={''}>
            <ThemedText>Collapsible Content</ThemedText>
          </Collapsible>
          <ExternalLink href="https://example.com">
            <ThemedText>Visit our website</ThemedText>
          </ExternalLink>
        </ScrollView>
      </ParallaxScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
});
