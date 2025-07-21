import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/ui/Header';
import Banner from '../feature/home/components/Banner';
import FeedCardList from '../feature/home/components/FeedCard';
import BottomNavbar from '../components/ui/BottomNavbar';

export default function LandingPage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FeedCardList
          ListHeaderComponent={
            <View>
              <Header />
              <Banner />
            </View>
          }
        />
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
}); 