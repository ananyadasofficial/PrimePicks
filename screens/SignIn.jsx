import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../reusableComponent/CustomButton';
import CustomInput from '../reusableComponent/CustomInput';
import { AuthUserContext } from '../context/authUserContext';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { login } = useContext(AuthUserContext);

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
      navigation.navigate('Main');
    }
  };

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>
      {/* <Text>{login}</Text> */}
      <CustomInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        error={emailError}
        keyboardType="email-address"
      />
      <CustomInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        error={passwordError}
        secureTextEntry
      />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <CustomButton
        title="Login"
        onPress={handleSignIn}
        variant="primary"
      />
      <Text style={styles.signUpText}>
        Don't have an account?{' '}
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
