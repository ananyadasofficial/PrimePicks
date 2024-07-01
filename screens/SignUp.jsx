import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../reusableComponent/CustomButton';
import CustomInput from '../reusableComponent/CustomInput';

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
      <CustomInput
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        error={errors.name}
      />
      <CustomInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        error={errors.email}
        keyboardType="email-address"
      />
      <CustomInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        error={errors.password}
        secureTextEntry
      />
      <CustomButton
        title="Register"
        onPress={handleSignUp}
        variant="primary"
      />
      <Text style={styles.signInText}>
        Already have an account?{' '}
        <Text style={styles.signInLink} onPress={() => navigation.navigate('SignIn')}>
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
