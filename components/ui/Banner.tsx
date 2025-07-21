import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const horizontalPadding = 40; // 20 left + 20 right
const bannerWidth = width - horizontalPadding;
const bannerHeight = Math.round(bannerWidth * 0.48); // ~16:7 aspect ratio for a short banner

const Banner = () => (
  <View style={styles.container}>
    <Image
      source={require('../../assets/images/Banner.png')}
      style={styles.bannerImage}
      resizeMode="cover"
    />
  </View>
);

export default Banner;

const styles = StyleSheet.create({
  container: {
    width: bannerWidth,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 8,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  bannerImage: {
    width: bannerWidth,
    height: bannerHeight,
    borderRadius: 16,
  },
}); 