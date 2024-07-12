import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Main from "./Main";
import Wishlist from "./Wishlist";
import Profile from "./Profile";
import SignOut from "./SignOut";
import AntDesign from "react-native-vector-icons/AntDesign";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  // Assuming 'user' is passed as a prop containing user details
  const { user } = props;

  // Function to get initials from first and last name
  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.initials}>
            {getInitials(user.firstName, user.lastName)}
          </Text>
        </View>
        <View style={styles.separator} />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  const screenOptions = {
    drawerStyle: {
      backgroundColor: "#EEEEEE",
      width: 260,
    },
  };

  // Dummy user object for testing
  const user = {
    firstName: "Ananya",
    lastName: "Das",
  };

  return (
    <Drawer.Navigator
      screenOptions={screenOptions}
      drawerContent={(props) => <CustomDrawerContent {...props} user={user} />}
    >
      <Drawer.Screen
        name="PrimePicks"
        component={Main}
        options={{
          drawerLabel: "Home",
          drawerLabelStyle: { fontSize: 17, color: "orange" },
          drawerIcon: () => (
            <AntDesign name="home" size={25} style={{ color: "black" }} />
          ),
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "gray",
        }}
      />
      <Drawer.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          drawerLabel: "Wishlist",
          drawerLabelStyle: { fontSize: 17 },
          drawerIcon: () => (
            <AntDesign name="hearto" size={25} style={{ color: "black" }} />
          ),
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "gray",
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: "Profile",
          drawerLabelStyle: { fontSize: 17 },
          drawerIcon: () => (
            <AntDesign name="user" size={25} style={{ color: "black" }} />
          ),
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "gray",
        }}
      />
      <Drawer.Screen
        name="SignOut"
        component={SignOut}
        options={{
          drawerLabel: "Sign Out",
          drawerLabelStyle: { fontSize: 17 },
          drawerIcon: () => (
            <AntDesign name="logout" size={25} style={{ color: "black" }} />
          ),
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "gray",
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#EEEEEE",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 30,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  initials: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFF",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "gray",
    marginVertical: 10,
  },
  bottomSection: {
    marginTop: "auto",
    paddingBottom: 10,
  },
});

export default DrawerNavigator;
