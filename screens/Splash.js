import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 4000); 
  }, []); // Dependency array so it is called only once

  const text = "PRIMEPICKS";

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        {text.split("").map((char, index) => (
          <Animatable.Text
            key={index}
            style={styles.letter}
            animation="fadeInLeft"
            duration={1500} 
            delay={index * 200} // Delay each letter
          >
            {char}
          </Animatable.Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  textContainer: {
    flexDirection: "row",
  },
  letter: {
    color: "#FB8B24",
    fontSize: 40,
    fontWeight: "800",
    fontFamily: 'serif',
  },
});

export default Splash;
