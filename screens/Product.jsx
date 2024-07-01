import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../context/cartContext';
import { CART_ACTIONS } from '../reducers/cartReducer';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const Product = ({ item, isCart }) => {
  const navigation = useNavigation();
  const { dispatch, cart } = useContext(CartContext);

  // Check if product is already in cart
  const productInCart = cart.find(cartItem => cartItem.id === item.id);

  // Handle decrease in quantity
  const handleDecrease = () => {
    if (productInCart && productInCart.quantity > 1) {
      dispatch({
        type: CART_ACTIONS.UPDATE_QUANTITY,
        payload: { productId: item.id, quantity: productInCart.quantity - 1 },
      });
    } else if (productInCart && productInCart.quantity === 1) {
      dispatch({
        type: CART_ACTIONS.REMOVE_FROM_CART,
        payload: item.id,
      });
    }
  };

  // Handle increase in quantity
  const handleIncrease = () => {
    dispatch({
      type: CART_ACTIONS.ADD_TO_CART,
      payload: { ...item, quantity: (productInCart ? productInCart.quantity + 1 : 1) },
    });
  };

  // Navigate to product details screen
  const navigateToDetails = () => {
    navigation.navigate('ProductDetails', { item });
  };

  // Render rating stars
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name="star"
          size={16}
          color={i <= rating ? (rating >= 4 ? 'green' : rating >= 3 ? 'yellow' : 'red') : '#ccc'}
        />
      );
    }
    return <View style={styles.rating}>{stars}</View>;
  };

  return (
    <TouchableOpacity style={styles.productContainer} onPress={navigateToDetails}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: item.images && item.images.length > 0 ? item.images[0] : 'https://via.placeholder.com/150' }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        {renderRating(item.rating)}
        <View style={styles.actionContainer}>
          <View style={styles.wishlistContainer}>
            <AntDesign
              name="hearto"
              size={25}
              color="#FB8B24"
              style={styles.wishlistIcon}
            />
          </View>
          {productInCart ? (
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.quantityButton} onPress={handleDecrease}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{productInCart.quantity}</Text>
              <TouchableOpacity style={styles.quantityButton} onPress={handleIncrease}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={[styles.submitBtn, styles.addToCartBtn]} // Combined styles to reduce space
              onPress={() => {
                dispatch({
                  type: CART_ACTIONS.ADD_TO_CART,
                  payload: { ...item, quantity: 1 },
                });
              }}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
    backgroundColor: '#FFF',
    padding: 20,
    marginRight: 16, 
    marginLeft: -3, 
    marginBottom: 8,
    marginTop: 5,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 40,
  },
  imageContainer: {
    flex: 0.4,
    paddingRight: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 0.6,
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FB8B24',
    marginBottom: 5,
  },
  rating: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  actionContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wishlistContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 2, // Adjusted to reduce space
  },
  wishlistIcon: {
    marginRight: 2, // Adjusted to reduce space
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#FB8B24',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 10,
  },
  submitBtn: {
    backgroundColor: '#FB8B24',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  addToCartBtn: {
    marginLeft: 10, // Adjusted margin to reduce space
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Product;
