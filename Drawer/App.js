import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './src/navigation/AuthStack';

export default function App() {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
