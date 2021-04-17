// 1 : Primary Component

import * as React from 'react';

// Importing react-navigation dependencies.
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing screens to be navigated.
import LoginScreen from './Login';
import HomeScreen from './Home';
import SignupScreen from './Signup';

// creating the stack to be used during the navigation.
const Stack = createStackNavigator();

// wrapping all the navigation routes inside the NavigationContainer
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignupScreen">
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}