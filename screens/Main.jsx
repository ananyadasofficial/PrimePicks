// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import ProductList from './ProductList';
// import HorizontalCategories from '../components/HorizontalCategories';

// const Main = () => {
//     return (
//         <View style={styles.container}>
//             <HorizontalCategories />
//             <ProductList />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#EEEDEB', 
//         padding: 10,
//     },
// });

// export default Main;

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, FlatList, Dimensions } from 'react-native';
import Product from './Product';
import HorizontalCategories from '../components/HorizontalCategories';
import Search from './Search';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

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
                setFilteredProducts(products); // Initialize with fetched products
            })
            .catch((err) => {
                console.error(`ProductList - Failed to retrieve products data ${err.message}`);
                Alert.alert("Error", "Failed to fetch products");
            });
    };

    return (
        <View style={styles.container}>
            <Search data={products} setData={setFilteredProducts} />
            <HorizontalCategories />
            <FlatList
                style={styles.flatView}
                data={filteredProducts}
                renderItem={({ item }) => <Product key={item.id.toString()} item={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
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
});

export default Main;

