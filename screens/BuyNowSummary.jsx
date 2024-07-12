import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import CustomButton from '../reusableComponent/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../context/cartContext';

const BuyNowSummary = ({ route }) => {
  const { cartItems } = route.params;
  const navigation = useNavigation();

  const calculateTotalINR = () => {
    // Assuming 1 USD = 74.5 INR
    const conversionRate = 74.5;
    const totalInUSD = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return (totalInUSD * conversionRate).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {cartItems.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image
              style={styles.image}
              source={{ uri: item.images?.[0] || 'https://via.placeholder.com/150' }}
              resizeMode="cover"
            />
            <View style={styles.detailsContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>Price: ₹{(item.price * 74.5).toFixed(2)}</Text>
              <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
              <Text style={styles.itemTotal}>Total: ₹{((item.price * item.quantity) * 74.5).toFixed(2)}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.fixedFooter}>
        <View style={styles.footerLeft}>
          <Text style={styles.totalLabel}>Grand Total:</Text>
          <Text style={styles.totalText}>₹{calculateTotalINR()}</Text>
        </View>
        <CustomButton
          title="Proceed to Pay"
          onPress={() => navigation.navigate('Payment', { totalAmount: calculateTotalINR() })}
          btnKind="rounded"
          variant="primary"
          size="md"
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollViewContent: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  itemQuantity: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  itemTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#059212',
  },
  fixedFooter: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 35,
    paddingBottom: 12,
  },
  totalLabel: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    paddingRight: 10,
  },
  button: {
    marginLeft: 'auto',
  },
});

export default BuyNowSummary;
