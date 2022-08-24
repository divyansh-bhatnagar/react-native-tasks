import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <View>
      <Text>AuthStack</Text>
    </View>
  )
}

const styles = StyleSheet.create({})