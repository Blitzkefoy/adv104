//HomePage.js

import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PosePerfect</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.welcomeText}>WELCOME TO POSE PERFECT</Text>
      
      <View style={styles.exerciseContainer}>
        <View style={styles.exerciseCard}>
          <Image
            source={require('./assets/bicepscurl.png')} 
            style={styles.exerciseImage}
          />
          <Text style={styles.exerciseLabel}>Bicep Curls</Text>
        </View>
        
        <View style={styles.exerciseCard}>
          <Image
            source={require('./assets/plank.jpg')} 
            style={styles.exerciseImage}
          />
          <Text style={styles.exerciseLabel}>Planks</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Exercises')}>
          <Text style={styles.buttonText}>Exercises</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Execute')}>
          <Text style={styles.buttonText}>Execute</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AboutUs')}>
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    paddingBottom: 20, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#D1B2F0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileIcon: {
    fontSize: 24,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6C63FF',
    textAlign: 'center',
    marginVertical: 20,
  },
  exerciseContainer: {
    alignItems: 'center',
  },
  exerciseCard: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    marginBottom: 20,
    alignItems: 'center',
  },
  exerciseImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  exerciseLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6C63FF',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#D1B2F0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
