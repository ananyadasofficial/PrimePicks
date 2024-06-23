import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Main from "./Main";
import Search from "./Search";
import Wishlist from "./Wishlist";
import Profile from "./Profile";
import Cart from "./Cart";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View
        style={{
          width: "100%",
          height: 70,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(0);
          }}
        >
          <Image
            source={require("../assets/images/home.png")}
            style={{ width: 24, height: 24, tintColor:selectedTab==0?'#FB8B24':'black' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(1);
          }}
        >
          <Image
            source={require("../assets/images/search.png")}
            style={{ width: 24, height: 24, tintColor:selectedTab==1?'#FB8B24':'black' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(2);
          }}
        >
          <Image
            source={require("../assets/images/cart.png")}
            style={{ width: 24, height: 24, tintColor:selectedTab==2?'#FB8B24':'black' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(3);
          }}
        >
          <Image
            source={require("../assets/images/heart.png")}
            style={{ width: 24, height: 24, tintColor:selectedTab==3?'#FB8B24':'black' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(4);
          }}
        >
          <Image
            source={require("../assets/images/user.png")}
            style={{ width: 24, height: 24, tintColor:selectedTab==4?'#FB8B24':'black' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;