import React from "react";
import { View, StyleSheet } from "react-native";
import CartList from "../reusableComponent/CartList";

const Cart = () => {
  return (
    <View style={styles.container}>
      <CartList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cart;
