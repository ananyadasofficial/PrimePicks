import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const CustomInput = ({ label, value, onChangeText, placeholder, error, secureTextEntry, keyboardType }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error ? styles.errorInput : null]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default CustomInput;
