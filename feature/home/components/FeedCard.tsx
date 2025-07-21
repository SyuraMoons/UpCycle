import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Modal, Pressable, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

export interface FeedCardProps {
  image: any;
  title: string;
  rating: number;
  ratingCount: number;
  quantity: string;
  price: string;
  category: string;
  sellerStatus: string;
  distance: string;
  type: string;
}

export const FeedCard: React.FC<FeedCardProps> = ({
  image,
  title,
  rating,
  ratingCount,
  quantity,
  price,
  category,
  sellerStatus,
  distance,
}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.contentBox}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.ratingRow}>
          {[...Array(5)].map((_, i) => (
            <Feather
              key={i}
              name={i < Math.round(rating) ? 'star' : 'star'}
              color={i < Math.round(rating) ? '#6FCF97' : '#E0E0E0'}
              size={15}
            />
          ))}
          <Text style={styles.ratingCount}>{ratingCount}</Text>
        </View>
        <Text style={styles.qtyPrice}>
          <Text style={styles.qty}>{quantity}</Text> / <Text style={styles.price}>{price}</Text>
        </Text>
        <Text style={styles.category}>{category}</Text>
        <View style={styles.sellerRow}>
          <View style={styles.verifiedBadge}>
            <Text style={styles.verifiedText}>{sellerStatus}</Text>
          </View>
          <View style={styles.distanceRow}>
            <Feather name="map-pin" size={13} color="#6B7280" />
            <Text style={styles.distance}>{distance}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const GARBAGE_TYPES = [
  'Semua',
  'Plastik',
  'Kaca',
  'Kertas',
  'Kayu',
  'Besi',
  'Elektronik',
  'Organik',
  'Lainnya',
];

const sampleData: FeedCardProps[] = [
  {
    image: require('../../../assets/images/partial-react-logo.png'),
    title: 'Botol Plastik',
    rating: 4,
    ratingCount: 15,
    quantity: '10 pcs',
    price: 'Rp2.000',
    category: 'Daur Ulang Kaca',
    sellerStatus: 'Terverifikasi',
    distance: '1,8 km',
    type: 'Plastik',
  },
  {
    image: require('../../../assets/images/partial-react-logo.png'),
    title: 'Botol Kaca',
    rating: 5,
    ratingCount: 8,
    quantity: '5 pcs',
    price: 'Rp5.000',
    category: 'Daur Ulang Kaca',
    sellerStatus: 'Terverifikasi',
    distance: '2,1 km',
    type: 'Kaca',
  },
  {
    image: require('../../../assets/images/partial-react-logo.png'),
    title: 'Kardus Bekas',
    rating: 3,
    ratingCount: 22,
    quantity: '15 pcs',
    price: 'Rp3.000',
    category: 'Daur Ulang Kertas',
    sellerStatus: 'Terverifikasi',
    distance: '0,9 km',
    type: 'Kertas',
  },
  {
    image: require('../../../assets/images/partial-react-logo.png'),
    title: 'Kayu Palet',
    rating: 4,
    ratingCount: 10,
    quantity: '8 pcs',
    price: 'Rp12.000',
    category: 'Daur Ulang Kayu',
    sellerStatus: 'Terverifikasi',
    distance: '3,2 km',
    type: 'Kayu',
  },
  {
    image: require('../../../assets/images/partial-react-logo.png'),
    title: 'Kaleng Besi',
    rating: 4,
    ratingCount: 12,
    quantity: '20 pcs',
    price: 'Rp10.000',
    category: 'Daur Ulang Besi',
    sellerStatus: 'Terverifikasi',
    distance: '1,2 km',
    type: 'Besi',
  },
  {
    image: require('../../../assets/images/partial-react-logo.png'),
    title: 'Kulkas Rusak',
    rating: 5,
    ratingCount: 3,
    quantity: '1 unit',
    price: 'Rp100.000',
    category: 'Elektronik',
    sellerStatus: 'Terverifikasi',
    distance: '4,5 km',
    type: 'Elektronik',
  },
  {
    image: require('../../../assets/images/partial-react-logo.png'),
    title: 'Sampah Organik',
    rating: 4,
    ratingCount: 7,
    quantity: '5 kg',
    price: 'Rp1.000',
    category: 'Organik',
    sellerStatus: 'Terverifikasi',
    distance: '2,7 km',
    type: 'Organik',
  },
  {
    image: require('../../../assets/images/partial-react-logo.png'),
    title: 'Barang Campuran',
    rating: 3,
    ratingCount: 5,
    quantity: '1 box',
    price: 'Rp7.000',
    category: 'Lainnya',
    sellerStatus: 'Terverifikasi',
    distance: '5,0 km',
    type: 'Lainnya',
  },
  // More cards for variety
  {
    image: require('../../../assets/images/partial-react-logo.png'),
    title: 'Botol Plastik',
    rating: 4,
    ratingCount: 15,
    quantity: '20 pcs',
    price: 'Rp10.000',
    category: 'Daur Ulang Kaca',
    sellerStatus: 'Terverifikasi',
    distance: '1,8 km',
    type: 'Plastik',
  },
];

interface FeedCardListProps {
  ListHeaderComponent?: React.ReactElement;
}

const FeedCardList: React.FC<FeedCardListProps> = ({ ListHeaderComponent }) => {
  const [selectedType, setSelectedType] = useState('Semua');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Filter by type
  const filteredData =
    selectedType === 'Semua'
      ? sampleData
      : sampleData.filter((item) => item.type === selectedType);

  // Only show 4 cards (2x2) unless showAll is true
  const displayData = showAll ? filteredData : filteredData.slice(0, 4);
  const showTampilkanSemuaButton = !showAll && filteredData.length > 4;
  const showTampilkanSedikitButton = showAll && filteredData.length > 4;

  // When dropdown changes, reset showAll to false
  const handleSelectType = (type: string) => {
    setSelectedType(type);
    setDropdownVisible(false);
    setShowAll(false);
  };

  return (
    <FlatList
      ListHeaderComponent={
        <View>
          {ListHeaderComponent}
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#222', marginBottom: 8, marginLeft: 2 }}>Sampah</Text>
          <TouchableOpacity
            style={{ alignSelf: 'flex-start', backgroundColor: '#E6F4EA', borderRadius: 16, paddingHorizontal: 16, paddingVertical: 6, marginBottom: 12, flexDirection: 'row', alignItems: 'center' }}
            onPress={() => setDropdownVisible(true)}
            activeOpacity={0.7}
          >
            <Text style={{ color: '#295C3D', fontWeight: 'bold', fontSize: 16 }}>{selectedType}</Text>
            <Feather name="chevron-down" size={18} color="#295C3D" style={{ marginLeft: 4 }} />
          </TouchableOpacity>
          <Modal
            visible={dropdownVisible}
            transparent
            animationType="fade"
            onRequestClose={() => setDropdownVisible(false)}
          >
            <Pressable style={styles.modalOverlay} onPress={() => setDropdownVisible(false)}>
              <View style={styles.dropdownMenu}>
                {GARBAGE_TYPES.map((type) => (
                  <TouchableOpacity
                    key={type}
                    style={styles.dropdownItem}
                    onPress={() => handleSelectType(type)}
                    activeOpacity={0.7}
                  >
                    <Text style={{ color: '#295C3D', fontSize: 16 }}>{type}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </Pressable>
          </Modal>
        </View>
      }
      data={displayData}
      renderItem={({ item }) => <FeedCard {...item} />}
      keyExtractor={(_, idx) => idx.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: (showTampilkanSemuaButton || showTampilkanSedikitButton) ? 8 : 0, marginTop: 8 }}
      ListFooterComponent={
        <View>
          {showTampilkanSemuaButton && (
            <TouchableOpacity
              style={styles.simpleLinkButton}
              onPress={() => setShowAll(true)}
              activeOpacity={0.6}
            >
              <Text style={styles.simpleLinkText}>Tampilkan Semua</Text>
            </TouchableOpacity>
          )}
          {showTampilkanSedikitButton && (
            <TouchableOpacity
              style={styles.simpleLinkButton}
              onPress={() => setShowAll(false)}
              activeOpacity={0.6}
            >
              <Text style={styles.simpleLinkText}>Tampilkan Sedikit</Text>
            </TouchableOpacity>
          )}
        </View>
      }
    />
  );
};

export default FeedCardList;

const CARD_WIDTH = (Dimensions.get('window').width - 20 * 2 - 12) / 2; // paddingHorizontal * 2 + gap

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 0,
    marginBottom: 16,
    marginHorizontal: 3,
    width: CARD_WIDTH,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 110,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#F3F3F3',
  },
  contentBox: {
    padding: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingCount: {
    fontSize: 13,
    color: '#888',
    marginLeft: 4,
  },
  qtyPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#222',
  },
  qty: {
    color: '#222',
    fontWeight: 'bold',
  },
  price: {
    color: '#295C3D',
    fontWeight: 'bold',
  },
  category: {
    color: '#219653',
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '500',
  },
  sellerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    justifyContent: 'space-between',
  },
  verifiedBadge: {
    backgroundColor: '#E6F4EA',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  verifiedText: {
    color: '#219653',
    fontSize: 12,
    fontWeight: 'bold',
  },
  distanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 6,
  },
  distance: {
    color: '#6B7280',
    fontSize: 12,
    marginLeft: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownMenu: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 0,
    minWidth: 180,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  showAllButton: {
    // removed all styling for simple link
  },
  showAllButtonText: {
    // removed all styling for simple link
  },
  interactiveButton: {
    // removed all styling for simple link
  },
  simpleLinkButton: {
    alignSelf: 'flex-start',
    marginTop: 4,
    marginLeft: 2,
  },
  simpleLinkText: {
    color: '#295C3D',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 15,
  },
}); 