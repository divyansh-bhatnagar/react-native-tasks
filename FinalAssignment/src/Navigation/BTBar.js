import {View, Text} from 'react-native';
import React from 'react';
import Home from '../screen/Home';
import Result from '../screen/Result';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AppNavigation } from './Navigation';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const BTBar = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="HomeTab"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'HomeTab') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'LikedProducts') {
          iconName = focused ? 'heart-sharp' : 'heart-outline';
        } else if (route.name === 'Cart') {
          iconName = focused ? 'ios-cart-sharp' : 'ios-cart-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#fa8a46',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}>
        <Tab.Screen name="HomeTab" component={AppNavigation} />
        <Tab.Screen name="Result" component={Result} />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BTBar;
