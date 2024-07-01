import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, Dimensions } from 'react-native';
import CustomButton from '../reusableComponent/CustomButton';

const ProductDetails = ({ route }) => {
  const { item } = route.params;

  // Function to render rating stars
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: item.images && item.images.length > 0 ? item.images[0] : 'https://via.placeholder.com/150' }}
          resizeMode="cover"
        />
        {/* Wishlist icon (Assuming it's already implemented) */}
        {/* Replace with your implementation of Wishlist icon */}
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        {item.description && <Text style={styles.description}>{item.description}</Text>}
        <Text style={styles.price}>Price: ${item.price.toFixed(2)}</Text>
        <Text style={styles.stock}>Stock: {item.stock}</Text>
        {item.category && <Text style={styles.category}>Category: {item.category}</Text>}
        {item.brand && <Text style={styles.brand}>Brand: {item.brand}</Text>}
        {item.tags && item.tags.length > 0 && (
          <Text style={styles.tags}>Tags: {item.tags.join(', ')}</Text>
        )}
        {item.rating && <Text style={styles.rating}>Rating: {item.rating.toFixed(2)}</Text>}
        {item.warrantyInformation && (
          <Text style={styles.warranty}>Warranty: {item.warrantyInformation}</Text>
        )}
        {item.shippingInformation && (
          <Text style={styles.shipping}>Shipping: {item.shippingInformation}</Text>
        )}
        {item.returnPolicy && (
          <Text style={styles.returnPolicy}>Return Policy: {item.returnPolicy}</Text>
        )}

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Add to Cart"
            onPress={() => {
              // Add to cart logic here
            }}
            btnKind="rounded"
            variant="primary"
            size="md" // Adjusted size to medium
          />
          <CustomButton
            title="Buy Now"
            onPress={() => {
              // Buy now logic here
            }}
            btnKind="rounded"
            variant="secondary"
            size="md" // Adjusted size to medium
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: Dimensions.get('window').width - 40,
    height: (Dimensions.get('window').width - 40) * 0.75, // Maintain aspect ratio
    borderRadius: 10,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FB8B24',
  },
  stock: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  category: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  brand: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  tags: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  rating: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  warranty: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  shipping: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  returnPolicy: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 10,
  },
});

export default ProductDetails;
