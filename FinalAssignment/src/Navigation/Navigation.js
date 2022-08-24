import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../screen/SignIn';
import SignUp from '../screen/SignUp';
import Home from '../screen/Home';
import Result from '../screen/Result';
import { NavigationContainer } from '@react-navigation/native';

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

export const AuthNavigation = () => {
  //const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
     // initialRouteName={'SignIn'}
     >
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
};

export const AppNavigation = () => {
    // const [isSignedIn, setIsSignedIn] = useState(true);
  return (
    <NavigationContainer>
    <AppStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Home'}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Result" component={Result} />
    </AppStack.Navigator>
    </NavigationContainer>
  );
};
