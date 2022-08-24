import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './src/screen/Home'
import BTBar from './src/Navigation/BTBar'
import SignUp from './src/screen/SignUp'
import SignIn from './src/screen/SignIn'
import { NavigationContainer } from '@react-navigation/native'
import { AuthNavigation, AppNavigation } from './src/Navigation/Navigation';
import DrawerComponent from './src/Navigation/DrawerComponent';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await AsyncStorage.getItem('currentuser');
      if (user) {
        setAuthenticated(true);
      }
    }
    checkAuth();
  }, []);

  return (
    <NavigationContainer>
      {authenticated ? <DrawerComponent /> : <AuthNavigation />}
    </NavigationContainer>
    // <BTBar />
    // <Home />
  )
}

export default App

const styles = StyleSheet.create({})