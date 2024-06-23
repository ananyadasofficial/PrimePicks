import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/PrimePicks.png")} style={styles.image} />
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'black',
  },
  image: {
    width: '80%',  
    height: '90%',  
    aspectRatio: 1, 
    marginTop: 65,
    marginBottom: 20,
    resizeMode: 'contain',  
  },
  button: {
    position: 'absolute', 
    bottom: 150, 
    alignSelf: 'center', 
    backgroundColor: '#FB8B24',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
