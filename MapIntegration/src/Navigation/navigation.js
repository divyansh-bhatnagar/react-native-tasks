import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapScreen from '../Screens/MapScreen';
import Login from '../Screens/Login';

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

export const Appnavigation = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={MapScreen} />
    </AppStack.Navigator>
  );
};

export const AuthNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};
