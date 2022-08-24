import {View, Text} from 'react-native';
import React from 'react';
import Home from '../Screen/Home';
import Result from '../Screen/Result';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

import { AppNavigation } from './Navigation';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import DrawerComponent from '../Components/DrawerComponent';

const Tab = createMaterialBottomTabNavigator();

const BottomTabBar = () => {
  return (
   
    <Tab.Navigator initialRouteName="HomeTab"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'HomeTab') {
          iconName = focused ? 'home' : 'home-outline';
        }else if (route.name === 'ResultTab') {
          iconName = focused ?  'basket' : 'basket-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#fa8a46',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}>
        <Tab.Screen name="HomeTab" component={DrawerComponent} />
        <Tab.Screen name="ResultTab" component={Result} />
    </Tab.Navigator>
    
  );
};

export default BottomTabBar;
