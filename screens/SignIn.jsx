import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../reusableComponent/CustomButton';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignIn = () => {
    let isValid = true;

    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      console.log('Email:', email);
      console.log('Password:', password);
      navigation.navigate('Home');
    }
  };

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>
      <TextInput
        style={[styles.input, emailError ? styles.errorInput : null]}
        placeholder="Enter your email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput
        style={[styles.input, passwordError ? styles.errorInput : null]}
        placeholder="Enter your password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      <Text style={styles.forgotPassword}>Forgot password?</Text>
      <CustomButton
        title="Login"
        onPress={handleSignIn}
        variant="primary" // Set variant to 'primary'
      />
      <Text style={styles.signUpText}>
        Don't have an account?
        <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>
          Sign Up
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
    marginBottom: 20,
    fontSize: 16,
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  forgotPassword: {
    color: '#999',
    textAlign: 'right',
    marginBottom: 20,
  },
  signUpText: {
    color: 'white',
    textAlign: 'center',
  },
  signUpLink: {
    color: '#FFAF45',
    fontWeight: 'bold',
  },
});

export default SignIn;
