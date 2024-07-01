import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const HorizontalCategories = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
        <View style={[styles.card, styles.cardHorizontal]}>
        <Image 
            source={{uri: "https://www.hindustantimes.com/ht-img/img/2024/03/23/1600x900/AMUL_1711183201983_1711183223726.jpg"}} 
            style={styles.image} 
          />
          <View style={styles.overlay} />
          <Text style={styles.text}>All Products</Text>
        </View>
        <View style={[styles.card, styles.cardHorizontal]}>
          <Image 
            source={{uri: "https://www.stylecraze.com/wp-content/uploads/2018/01/50-Fashion-Tips-Every-Girl-Should-Know.jpg"}} 
            style={styles.image} 
          />
          <View style={styles.overlay} />
          <Text style={styles.text}>Fashion</Text>
        </View>
        <View style={[styles.card, styles.cardHorizontal]}>
        <Image 
            source={{uri: "https://t3.ftcdn.net/jpg/03/71/95/12/360_F_371951215_G3bz9Whgkdd7S1XQqGMLhaVHdOOzwW82.jpg"}} 
            style={styles.image} 
          />
          <View style={styles.overlay} />
          <Text style={styles.text}>Beauty</Text>
        </View>
        <View style={[styles.card, styles.cardHorizontal]}>
        <Image 
            source={{uri: "https://media-afr-cdn.oriflame.com/contentImage?externalMediaId=201bc7b3-c2f8-4578-af70-2dfe9523f20f&name=perfumes-1&inputFormat=png"}} 
            style={styles.image} 
          />
          <View style={styles.overlay} />
          <Text style={styles.text}>Fragrances</Text>
        </View>
        <View style={[styles.card, styles.cardHorizontal]}>
        <Image 
            source={{uri: "https://5.imimg.com/data5/ANDROID/Default/2022/4/WC/WM/BY/80466078/product-jpeg.jpg"}} 
            style={styles.image} 
          />
          <View style={styles.overlay} />
          <Text style={styles.text}>Furniture</Text>
        </View>
        <View style={[styles.card, styles.cardHorizontal]}>
        <Image 
            source={{uri: "https://img.freepik.com/free-photo/shopping-cart-full-products-inside-supermarket_123827-28166.jpg"}} 
            style={styles.image} 
          />
          <View style={styles.overlay} />
          <Text style={styles.text}>Grocery</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default HorizontalCategories;

const styles = StyleSheet.create({
  container: {
    padding: 6,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 5,
    overflow: 'hidden', // Ensures the overlay and image stay within the card bounds
  },
  cardHorizontal: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
  },
});
