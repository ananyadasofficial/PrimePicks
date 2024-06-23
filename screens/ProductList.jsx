import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .catch(err => {
        console.error(`ProductList - Failed to parse the response ${err.message}`);
      })

      .then((res) => {
        const { products } = res;
        console.log("Returned number of items",products.length);
        setProducts(products);
      })
      .catch((err) => {
        console.error(`ProductList - Failed to retrieve products data ${err.message}`);
      });
  }, []);

  return (
    <View>
        {products.map(product => (<Product product={product} />))}
      <Product />
    </View>
  );
};

export default ProductList;
