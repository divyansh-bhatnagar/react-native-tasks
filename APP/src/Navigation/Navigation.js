import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../Screen/SignIn';
import SignUp from '../Screen/SignUp';
import Home from '../Screen/Home';

import {NavigationContainer} from '@react-navigation/native';
import BottomTabBar from '../Components/BottomTabBar';
import DrawerComponent from '../Components/DrawerComponent';
import ImageComponent from '../Components/ImageComponent';

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

export const AuthNavigation = () => {
  //const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'SignIn'}
    >
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
};

export const AppNavigation = () => {
  // const [isSignedIn, setIsSignedIn] = useState(true);
  return (
    <AppStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'BottomTabBar'}>
      <AppStack.Screen name="HomeScreen" component={Home} />
      <AppStack.Screen name="BottomTabBar" component={BottomTabBar} />
      <AppStack.Screen name="Drawer" component={DrawerComponent} />
      <AppStack.Screen name="imageUploader" component={ImageComponent} />
    </AppStack.Navigator>
  );
};
