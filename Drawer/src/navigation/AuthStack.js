import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import AppStack from './AppStack';
import Aboutus1 from '../Screens/Aboutsus1';
import Aboutsus2 from '../Screens/Aboutsus2';
import Aboutus3 from '../Screens/Aboutus3';

const AuthStack = createNativeStackNavigator();


 function Auth() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name="login" component={Login} />
        <AuthStack.Screen name="Tab" component={AppStack} />
        <AuthStack.Screen name="About1" component={Aboutus1} />
        <AuthStack.Screen name="About2" component={Aboutsus2} />
        <AuthStack.Screen name="About3" component={Aboutus3} />
    </AuthStack.Navigator>
  );
}

export default Auth;