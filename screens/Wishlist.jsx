import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { WishlistContext } from '../context/wishlistContext';
import Product from './Product';

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>My Favourites</Text> */}
      {wishlist.length === 0 ? (
        <Text style={styles.emptyText}>Your wishlist is empty.</Text>
      ) : (
        <FlatList
          data={wishlist}
          renderItem={({ item }) => <Product item={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.productList}
          showsVerticalScrollIndicator={false} 
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  emptyText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
  productList: {
    paddingBottom: 20,
  },
});

export default Wishlist;
