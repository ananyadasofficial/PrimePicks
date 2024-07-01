import React, { useEffect, useState, useContext } from "react";
import { Dimensions, FlatList, StyleSheet, View, Alert, Text } from "react-native";
import Product from "../screens/Product";
import { CartContext } from "../context/cartContext";

const CartList = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    console.log("Inside CartList ", cart);
  }, [cart]);

  const refreshList = () => {
    setIsRefreshing(true);
    Alert.alert("My App alerts", "List Refreshed...", [
      { text: "Done" },
      { text: "OK" },
      { text: "Refresh Again" },
    ]);
    setIsRefreshing(false);
  };

  if (!cart || cart.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyCartText}>Your Cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatView}
        data={cart}
        renderItem={({ item }) => <Product key={item.id} item={item} isCart={true} />}
        keyExtractor={(item) => item.id.toString()}
        extraData={isRefreshing}
        onRefresh={refreshList}
        refreshing={isRefreshing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  flatView: {
    backgroundColor: "#EEEDEB",
    width: Dimensions.get("window").width,
  },
  emptyCartText: {
    fontSize: 14,
    color: "#333",
  },
});

export default CartList;
