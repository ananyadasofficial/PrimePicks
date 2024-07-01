import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Alert, Dimensions } from "react-native";
import Product from "./Product";

const ProductList = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((res) => {
        const { products } = res;
        console.log("Returned number of items", products.length);
        setProducts(products);
      })
      .catch((err) => {
        console.error(
          `ProductList - Failed to retrieve products data ${err.message}`
        );
        Alert.alert("Error", "Failed to fetch products");
      })
      .finally(() => {
        setIsRefreshing(false);
      });
  };

  const refreshList = () => {
    setIsRefreshing(true);
    fetchProducts();
    Alert.alert("Alert", "List Refreshed...");
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatView}
        data={products}
        renderItem={({ item }) => (
          <Product key={item.id.toString()} item={item} />
        )}
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
    backgroundColor: "#EEEDEB",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  flatView: {
    backgroundColor: "#EEEDEB",
    width: Dimensions.get("window").width,
  },
});

export default ProductList;
