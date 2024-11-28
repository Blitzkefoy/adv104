// LoginPage.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const navigation = useNavigation();

  const handleGoogleSignIn = () => {
    // Placeholder for sign-in action
    Alert.alert("Login", "Simulating Google Sign-In...");
    navigation.replace('Home'); // Redirect to Home screen after "sign-in"
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/poser.png')} style={styles.logo} />

      <Text style={styles.title}>Welcome to PosePerfect</Text>

      <TouchableOpacity style={styles.button} onPress={handleGoogleSignIn}>
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>

      <Text
        style={styles.signUpText}
        onPress={() => navigation.navigate('SignUp')}
      >
        Don’t have an account? Sign Up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    height: 120,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  signUpText: {
    color: 'blue',
    marginTop: 20,
  },
});

export default LoginPage;
