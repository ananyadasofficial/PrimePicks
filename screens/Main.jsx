import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Dimensions, FlatList, TouchableOpacity, Switch } from 'react-native';
import Product from './Product';
import HorizontalCategories from '../components/HorizontalCategories';
import Search from './Search';
import ProductGrid from './ProductGrid'; 

const Main = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isGridMode, setIsGridMode] = useState(false); 

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
        setProducts(products);
        setFilteredProducts(products); 
      })
      .catch((err) => {
        console.error(`ProductList - Failed to retrieve products data ${err.message}`);
        Alert.alert("Error", "Failed to fetch products");
      });
  };
  
  const toggleViewMode = () => {
    setIsGridMode(!isGridMode);
  };

  return (
    <View style={styles.container}>
      <Search data={products} setData={setFilteredProducts} />
      <HorizontalCategories />
      <View style={styles.topSelection}>
        <Text style={styles.topSelectionText}>Top Selection</Text>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>{isGridMode ? 'Grid View' : 'List View'}</Text>
          <Switch
            value={isGridMode}
            onValueChange={toggleViewMode}
            trackColor={{ false: "#EEEDEB", true: "#FB8B24" }}
            thumbColor={isGridMode ? "#FFF" : "#FFF"}
            ios_backgroundColor="#EEEDEB"
            style={{
              borderColor: isGridMode ? '#FB8B24' : '#EEEDEB', // Orange when in list view, otherwise default color
              borderWidth: 1,
              borderRadius: 15,
              width: 45,
              height: 25,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 2
            }}
          />
        </View>
      </View>
      {isGridMode ? (
        <ProductGrid products={filteredProducts} /> // Render grid view
      ) : (
        <FlatList
          style={styles.flatView}
          data={filteredProducts}
          renderItem={({ item }) => <Product key={item.id.toString()} item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEDEB',
    padding: 10,
  },
  flatView: {
    backgroundColor: "#EEEDEB",
    width: Dimensions.get("window").width,
  },
  topSelection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Aligns items in a row with space between them
    marginBottom: 10,
  },
  topSelectionText: {
    fontSize: 22,
    fontWeight: 'bold', // Makes the text bold
    marginLeft: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 16,
    marginRight: 10,
  },
});

export default Main;
