import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { CartContext } from '../context/cartContext';
import { WishlistContext } from '../context/wishlistContext'; 
import { CART_ACTIONS } from '../reducers/cartReducer'; 
import { WISHLIST_ACTIONS } from '../reducers/wishlistReducer'; 

const ProductGrid = ({ products }) => {
  const navigation = useNavigation();
  const { dispatch: cartDispatch, cart } = useContext(CartContext);
  const { dispatch: wishlistDispatch, wishlist } = useContext(WishlistContext);

  const usdToInrRate = 74.5; 

  const renderItem = ({ item }) => {
    const productInCart = cart.find(cartItem => cartItem.id === item.id);
    const isInWishlist = wishlist.find(wishlistItem => wishlistItem.id === item.id);

    const handleDecrease = () => {
      if (productInCart && productInCart.quantity > 1) {
        cartDispatch({
          type: CART_ACTIONS.UPDATE_QUANTITY,
          payload: { productId: item.id, quantity: productInCart.quantity - 1 },
        });
      } else if (productInCart && productInCart.quantity === 1) {
        cartDispatch({
          type: CART_ACTIONS.REMOVE_FROM_CART,
          payload: item.id,
        });
      }
    };

    const handleIncrease = () => {
      cartDispatch({
        type: CART_ACTIONS.ADD_TO_CART,
        payload: { ...item, quantity: productInCart ? productInCart.quantity + 1 : 1 },
      });
    };

    const toggleWishlist = () => {
      if (isInWishlist) {
        wishlistDispatch({
          type: WISHLIST_ACTIONS.REMOVE_FROM_WISHLIST,
          payload: item.id,
        });
      } else {
        wishlistDispatch({
          type: WISHLIST_ACTIONS.ADD_TO_WISHLIST,
          payload: item,
        });
      }
    };

    const navigateToDetails = () => {
      navigation.navigate('ProductDetails', { item });
    };

    const renderRating = (rating) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <FontAwesome
            key={i}
            name="star"
            size={16}
            color={i <= rating ? (rating >= 4 ? 'green' : rating >= 3 ? '#FFC700' : 'red') : '#ccc'}
          />
        );
      }
      return <View style={styles.ratingContainer}>{stars}</View>;
    };

    const priceInRupees = (item.price * usdToInrRate).toFixed(2);

    return (
      <TouchableOpacity style={styles.productContainer} onPress={navigateToDetails}>
        <Image source={{ uri: item.images[0] }} style={styles.image} resizeMode="cover" />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>₹{priceInRupees}</Text>
          {renderRating(item.rating)}
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={toggleWishlist}>
              <AntDesign
                name={isInWishlist ? 'heart' : 'hearto'}
                size={20}
                color={isInWishlist ? '#FB8B24' : '#555'}
              />
            </TouchableOpacity>
            {productInCart ? (
              <View style={styles.quantitySelector}>
                <TouchableOpacity style={styles.quantityButton} onPress={handleDecrease}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{productInCart.quantity}</Text>
                <TouchableOpacity style={styles.quantityButton} onPress={handleIncrease}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => {
                  cartDispatch({
                    type: CART_ACTIONS.ADD_TO_CART,
                    payload: { ...item, quantity: 1 },
                  });
                }}
              >
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEDEB',
    padding: 1,
  },
  productContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 4,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'column',
    flex: 1,
  },
  image: {
    height: 135,
    borderRadius: 10,
  },
  detailsContainer: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F5F7F8',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 1,
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -9,
  },
  addToCartButton: {
    backgroundColor: '#FB8B24',
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityButton: {
    backgroundColor: '#FB8B24',
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 12,
  },
  quantityButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});

export default ProductGrid;
