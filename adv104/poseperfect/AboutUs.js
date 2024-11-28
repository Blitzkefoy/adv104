//AboutUs.js

import React from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function PosePerfectInfoPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>PosePerfect Project</Text>
        <Text style={styles.description}>
          PosePerfect is an innovative exercise correction application utilizing real-time pose estimation and machine learning to enhance workout safety and effectiveness. 
          It aims to provide users with real-time feedback to correct their exercise form and improve overall workout quality.
        </Text>
        <Text style={styles.subTitle}>Team Members:</Text>
        <Text style={styles.members}>
          1. Jumel Ivan Pelino{'\n'}
          2. Jake Andy Corciega{'\n'}
          3. Kyla Llanes{'\n'}
          4. John Rey Manos{'\n'}
          5. Alexander Grant Rebusora
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#607D8B',  
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#212121',  
    marginBottom: 24,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#607D8B',  
    marginBottom: 10,
  },
  members: {
    fontSize: 16,
    color: '#212121',  
  },
});
