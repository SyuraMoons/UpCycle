import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to UpCycle</Text>
      <Text style={styles.subtitle}>Your journey starts here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#222',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
}); 