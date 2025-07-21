import React from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/ui/Header';
import Banner from '../components/ui/Banner';
import FeedCardList from '../components/ui/FeedCard';
import BottomNavbar from '../components/ui/BottomNavbar';

export default function LandingPage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Header />
          <Banner />
          <FeedCardList />
        </ScrollView>
        <BottomNavbar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 80, // space for navbar
  },
}); 