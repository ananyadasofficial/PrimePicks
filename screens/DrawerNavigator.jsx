import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from "./Main";
import Wishlist from './Wishlist';
import Profile from './Profile';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const screenOptions = {
    drawerStyle: {
      backgroundColor: '#EEEEEE',
      width: 260,
    },
  };

  return (
    <Drawer.Navigator screenOptions={screenOptions}>
      <Drawer.Screen
        name="PrimePicks"
        component={Main}
        options={{
          drawerLabel: 'Home',
          drawerLabelStyle: { fontSize: 17, color: 'orange' },
          drawerIcon: () => <AntDesign name="home" size={25} style={{ color: 'black' }} />,
          drawerActiveTintColor: 'orange',
          drawerInactiveTintColor: 'gray',
          drawerActiveBackgroundColor: 'white',
          drawerInactiveBackgroundColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          drawerLabel: 'Wishlist',
          drawerLabelStyle: { fontSize: 17 },
          drawerIcon: () => <AntDesign name="hearto" size={25} style={{ color: 'black' }} />,
          drawerActiveTintColor: 'orange',
          drawerInactiveTintColor: 'gray',
          drawerActiveBackgroundColor: 'white',
          drawerInactiveBackgroundColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: 'Profile',
          drawerLabelStyle: { fontSize: 17 },
          drawerIcon: () => <AntDesign name="user" size={25} style={{ color: 'black' }} />,
          drawerActiveTintColor: 'orange',
          drawerInactiveTintColor: 'gray',
          drawerActiveBackgroundColor: 'white',
          drawerInactiveBackgroundColor: 'white',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
