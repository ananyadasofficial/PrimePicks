import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ToggleButton = ({ isGridView, toggleView }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleView} style={styles.button}>
        <Icon name={isGridView ? 'appstore-o' : 'bars'} size={24} color="#FB8B24" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#EEEDEB',
    padding: 10,
    borderRadius: 5,
  },
});

export default ToggleButton;
