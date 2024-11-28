import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './LoginPage';
import HomePage from './HomePage'; 
import ExercisesPage from './ExercisesPage'; 
import Execute from './Execute';  
import AboutUs from './AboutUs';  

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Login Screen */}
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        
        {/* Home Screen */}
        <Stack.Screen 
          name="Home" 
          component={HomePage} 
          options={{ headerShown: false }} 
        />
        
        {/* Exercises Page */}
        <Stack.Screen 
          name="Exercises" 
          component={ExercisesPage} 
          options={{ title: 'Exercises', headerShown: true }} 
        />

        {/*Execute Page */}
        <Stack.Screen 
          name="Execute" 
          component={Execute} 
          options={{ title: 'Execute', headerShown: true }} 
        />

        {/*About Us Page */}
        <Stack.Screen 
          name="AboutUs" 
          component={AboutUs} 
          options={{ title: 'AboutUs', headerShown: true }} 
        />
        

      
      </Stack.Navigator>
    </NavigationContainer>
  );
}



