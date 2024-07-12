import React, { useContext } from "react";
import { View, Text, StyleSheet, Alert, Dimensions, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Product from "../screens/Product";
import { CartContext } from "../context/cartContext";
import CustomButton from "../reusableComponent/CustomButton";
import { useNavigation } from "@react-navigation/native";

const emptyCartGif = "https://www.hamropharma.com/f8039202dbc38a84732a9b1a90435e49.gif";

const CartList = () => {
  const navigation = useNavigation(); 
  const { cart } = useContext(CartContext);

  const handleBuyNow = () => {
    if (cart.length > 0) {
      navigation.navigate('BuyNowSummary', { cartItems: cart });
    } else {
      Alert.alert("Empty Cart", "Please add items to your cart first.");
    }
  };

  const handleShopNow = () => {
    navigation.navigate('Main'); 
  };

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Image source={{ uri: emptyCartGif }} style={styles.emptyCartGif} />
          <Text style={styles.emptyCartText}>Your Cart is empty</Text>
          <CustomButton
            title="Shop Now"
            onPress={handleShopNow}
            btnKind="rounded"
            variant="secondary"
            size="md"
            style={styles.shopNowButton}
          />
        </View>
      ) : (
        <>
          <FlatList
            style={styles.flatView}
            data={cart}
            renderItem={({ item }) => <Product item={item} isCart={true} />}
            keyExtractor={(item) => item.id.toString()}
          />
          <CustomButton
            title="Buy Now"
            onPress={handleBuyNow}
            btnKind="rounded"
            variant="secondary"
            size="md"
            style={styles.buyNowButton}
          />
        </>
      )}
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
    width: Dimensions.get("window").width,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartGif: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  emptyCartText: {
    fontSize: 15,
    color: "#333",
    marginBottom: 20,
  },
  shopNowButton: {
    marginBottom: 10,
  },
  buyNowButton: {
    marginTop: "auto", 
    marginBottom: 10,
  },
});

export default CartList;
