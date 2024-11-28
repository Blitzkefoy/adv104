//ExercisesPage.js

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, FlatList, Dimensions } from 'react-native';

const exercises = [
  {
    name: 'Forearm Plank',
    description: 'The forearm plank is a core-strengthening exercise where you support your body weight on your forearms and toes, with your body in a straight line from head to heels. To perform it, start by lying face down, then lift your body off the ground, balancing on your forearms and toes while keeping your body rigid and aligned. This exercise strengthens the core muscles, including the abdominals, obliques, and lower back, and also engages the shoulders and glutes. Benefits include improved core stability, enhanced posture, increased overall strength, and better endurance.',
    gif: require('./assets/forearmplank.jpg'),
  },
  {
    name: 'Biceps Curl',
    description: 'A biceps curl is an upper body strength exercise that targets the biceps muscles in the front of the upper arm. It involves holding a weight in one or both hands and bending the elbows to lift the weight toward the shoulders while keeping the upper arms stationary.',
    gif: require('./assets/Biceps.jpg'),
  },
];

const ExercisesPage = ({ navigation }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const imageHeight = screenWidth * 0.4; 
  const descriptionFontSize = screenWidth * 0.045; 

  const goToNextPage = () => {
    if (currentPageIndex < exercises.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Page content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.exerciseCard}>
          <Text style={styles.exerciseName}>{exercises[currentPageIndex].name}</Text>
          <Image
            source={exercises[currentPageIndex].gif}
            style={[styles.exerciseImage, { height: imageHeight }]}
          />
          <ScrollView style={styles.descriptionContainer}>
            <Text style={[styles.descriptionText, { fontSize: descriptionFontSize }]}>
              {exercises[currentPageIndex].description}
            </Text>
          </ScrollView>
        </View>
      </ScrollView>

      {/* Page navigation */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={goToPreviousPage} style={styles.navButton} disabled={currentPageIndex === 0}>
          <Text style={styles.navButtonText}>Previous</Text>
        </TouchableOpacity>
        <Text style={styles.pageInfo}>
          Page {currentPageIndex + 1} of {exercises.length}
        </Text>
        <TouchableOpacity onPress={goToNextPage} style={styles.navButton} disabled={currentPageIndex === exercises.length - 1}>
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    padding: 16,
  },
  exerciseCard: {
    marginBottom: 20,
  },
  exerciseName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6C63FF',
    textAlign: 'center',
    marginBottom: 16,
  },
  exerciseImage: {
    width: '100%',
    borderRadius: 12,
  },
  descriptionContainer: {
    marginTop: 16,
    paddingHorizontal: 8,
  },
  descriptionText: {
    color: '#333333',
    textAlign: 'justify',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#6C63FF',
    borderRadius: 20,
  },
  navButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  pageInfo: {
    fontSize: 16,
    color: '#000',
  },
});

export default ExercisesPage;
