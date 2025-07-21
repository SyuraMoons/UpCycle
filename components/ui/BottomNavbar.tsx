import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function BottomNavbar() {
  return (
    <View style={styles.navbar}>
      <View style={styles.navItem}>
        <Ionicons name="home-outline" size={28} color="#295C3D" />
        <Text style={[styles.navLabel, styles.activeLabel]}>Home</Text>
      </View>
      <View style={styles.navItem}>
        <Feather name="globe" size={28} color="#6B7280" />
        <Text style={styles.navLabel}>Explore</Text>
      </View>
      <View style={styles.navItem}>
        <Feather name="shopping-cart" size={28} color="#6B7280" />
        <Text style={styles.navLabel}>Cart</Text>
      </View>
      <View style={styles.navItem}>
        <Feather name="heart" size={28} color="#6B7280" />
        <Text style={styles.navLabel}>Saved</Text>
      </View>
      <View style={styles.navItem}>
        <Ionicons name="person-outline" size={28} color="#6B7280" />
        <Text style={styles.navLabel}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  activeLabel: {
    color: '#295C3D',
    fontWeight: 'bold',
  },
}); 