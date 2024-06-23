import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../reusableComponent/CustomButton';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      navigation.navigate('SignIn');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter your name" 
        placeholderTextColor="#999"
        value={name}
        onChangeText={text => setName(text)}
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}
      <TextInput 
        style={styles.input} 
        placeholder="Enter your email" 
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}
      <TextInput 
        style={styles.input} 
        placeholder="Enter your password" 
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}
      <Text style={styles.forgotPassword}>Forgot password?</Text>
      <CustomButton 
        title="Register" 
        onPress={handleSignUp} 
      />
      <Text style={styles.signInText}>
        Already have an account? 
        <Text 
          style={styles.signInLink} 
          onPress={() => navigation.navigate('SignIn')}
        >
          Sign In
        </Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  heading: {
    color: '#FFAF45',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    fontSize: 16,
  },
  forgotPassword: {
    color: '#999',
    textAlign: 'right',
    marginBottom: 20,
  },
  signInText: {
    color: 'white',
    textAlign: 'center',
  },
  signInLink: {
    color: '#FFAF45',
    fontWeight: 'bold',
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginBottom: 5,
  },
});

export default SignUp;
