import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet } from 'react-native';
import DrawerNavigator from './DrawerNavigator';
import Search from './Search';
import Cart from './Cart';
import Wishlist from './Wishlist';
import Profile from './Profile';
import CartProvider, { CartContext } from '../context/cartContext';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  // Badge component for the Cart tab
  const CartIconWithBadge = ({ color, size }) => {
    const { cart } = useContext(CartContext);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
      <View style={styles.iconContainer}>
        <AntDesign name="shoppingcart" size={size} style={{ color: color }} />
        {itemCount > 0 && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{itemCount}</Text>
          </View>
        )}
      </View>
    );
  };

  const screenOptions = {
    tabBarStyle: {
      height: 60,
      paddingTop: 10,
      paddingBottom: 3,
    },
    tabBarItemStyle: {
      marginBottom: 2,
    },
  };

  return (
    <CartProvider>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={DrawerNavigator}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarLabelStyle: { fontWeight: '500', fontSize: 12 },
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={25} style={{ color: color }} />
            ),
            tabBarActiveTintColor: "orange",
            tabBarInactiveTintColor: "black",
            tabBarActiveBackgroundColor: "white",
            tabBarInactiveBackgroundColor: "white",
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: "Search",
            tabBarLabelStyle: { fontWeight: '500', fontSize: 12 },
            tabBarIcon: ({ color }) => (
              <AntDesign name="search1" size={25} style={{ color: color }} />
            ),
            tabBarActiveTintColor: "orange",
            tabBarInactiveTintColor: "black",
            tabBarActiveBackgroundColor: "white",
            tabBarInactiveBackgroundColor: "white",
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: "Cart",
            tabBarLabelStyle: { fontWeight: '500', fontSize: 12 },
            tabBarIcon: ({ color }) => (
              <CartIconWithBadge color={color} size={25} />
            ),
            tabBarActiveTintColor: "orange",
            tabBarInactiveTintColor: "black",
            tabBarActiveBackgroundColor: "white",
            tabBarInactiveBackgroundColor: "white",
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            tabBarLabel: "Wishlist",
            tabBarLabelStyle: { fontWeight: '500', fontSize: 12 },
            tabBarIcon: ({ color }) => (
              <AntDesign name="hearto" size={25} style={{ color: color }} />
            ),
            tabBarActiveTintColor: "orange",
            tabBarInactiveTintColor: "black",
            tabBarActiveBackgroundColor: "white",
            tabBarInactiveBackgroundColor: "white",
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { fontWeight: '500', fontSize: 12 },
            tabBarIcon: ({ color }) => (
              <AntDesign name="user" size={25} style={{ color: color }} />
            ),
            tabBarActiveTintColor: "orange",
            tabBarInactiveTintColor: "black",
            tabBarActiveBackgroundColor: "white",
            tabBarInactiveBackgroundColor: "white",
          }}
        />
      </Tab.Navigator>
    </CartProvider>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'relative',
  },
  badgeContainer: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default TabNavigator;
