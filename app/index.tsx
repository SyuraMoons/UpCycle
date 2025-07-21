import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/ui/Header';
import BottomNavbar from '../components/ui/BottomNavbar';

export default function LandingPage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.content}>
        {/* Main content goes here */}
      </View>
      <BottomNavbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
}); 