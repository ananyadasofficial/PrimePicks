import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const googlePayIcon = 'https://play-lh.googleusercontent.com/HArtbyi53u0jnqhnnxkQnMx9dHOERNcprZyKnInd2nrfM7Wd9ivMNTiz7IJP6-mSpwk';
const phonePeIcon = 'https://yt3.googleusercontent.com/ytc/AIdro_lk0K-aQ9HIJ8ORgs-2UGEXDiEV-fXKSchD6JPp_FAoHDs=s900-c-k-c0x00ffffff-no-rj';
const paytmIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYMs5YUA9Ro5Cq4Z27hlXSSHH6Y7CK6Tc6A&s';
const creditCardIcon = 'https://static.vecteezy.com/system/resources/thumbnails/000/357/048/small/3__2821_29.jpg';
const debitCardIcon = 'https://static.vecteezy.com/system/resources/thumbnails/000/357/048/small/3__2821_29.jpg';
const payPalIcon = 'https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png';
const otherUpiIcon = 'https://static.thenounproject.com/png/6730166-200.png';

export default function Payment({ route }) {
  const { totalAmount } = route.params;
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePayment = () => {
    if (selectedPayment === null) {
      Alert.alert('Select Payment Method', 'Please select a payment method before proceeding.');
      return;
    }

    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      Alert.alert('Success', 'Payment Successful');
    }, 2000);
  };

  const paymentMethods = [
    { id: 1, name: 'Credit Card', icon: creditCardIcon },
    { id: 2, name: 'Debit Card', icon: debitCardIcon },
    { id: 3, name: 'Google Pay', icon: googlePayIcon },
    { id: 4, name: 'PhonePe', icon: phonePeIcon },
    { id: 5, name: 'Paytm', icon: paytmIcon },
    { id: 6, name: 'PayPal', icon: payPalIcon },
    { id: 7, name: 'Other UPI', icon: otherUpiIcon },
  ];

  // Ensure totalAmount is defined and a number before using .toFixed(2)
  const displayAmount = totalAmount ? `₹${Number(totalAmount).toFixed(2)}` : '₹0.00';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Payment Method</Text>
      <Text style={styles.amount}>Amount: {displayAmount}</Text>

      <View style={styles.methodContainer}>
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={styles.option}
            onPress={() => setSelectedPayment(method.id)}
          >
            {typeof method.icon === 'string' ? (
              <Image source={{ uri: method.icon }} style={styles.iconImage} />
            ) : (
              <Icon name={method.icon} size={24} color="#333" />
            )}
            <Text style={styles.optionText}>{method.name}</Text>
            <View
              style={[
                styles.circle,
                selectedPayment === method.id && styles.selectedCircle,
              ]}
            >
              {selectedPayment === method.id && (
                <Icon name="check" size={16} color="#fff" />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay {displayAmount}</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Icon name="check-circle" size={100} color="green" />
            <Text style={styles.successText}>Payment Successful!</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  methodContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  amount: {
    fontSize: 18,
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    marginVertical: 3,
  },
  optionText: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
  },
  iconImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  selectedCircle: {
    backgroundColor: '#FFA500',
    borderColor: '#FFA500',
  },
  payButton: {
    marginTop: 20,
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  payButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'green',
  },
});
