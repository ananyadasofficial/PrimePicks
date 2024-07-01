import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Wishlist = () => {
  return (
    <View style={styles.container}>
      <Text>Your Wishlist is empty</Text>
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

export default Wishlist;
