import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import Banner from '../../feature/home/components/Banner';


export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>John</Text>
        </View>
        <TouchableOpacity style={styles.iconCircle}>
          <Ionicons name="notifications-outline" size={24} color="#295C3D" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color="#6B7280" style={{ marginRight: 8 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search items..."
            placeholderTextColor="#6B7280"
          />
        </View>
        <TouchableOpacity style={styles.filterCircle}>
          <Feather name="filter" size={20} color="#295C3D" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 16,
    color: '#6B7280',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#295C3D',
  },
  iconCircle: {
    backgroundColor: '#E6F4EA',
    borderRadius: 24,
    padding: 10,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#222',
  },
  filterCircle: {
    backgroundColor: '#E6F4EA',
    borderRadius: 12,
    padding: 10,
    marginLeft: 12,
  },
}); 