import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Store/store';
import {AppNavigation, AuthNavigation} from './src/Navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import UserAuth from './src/Components/UserAuth';

const App = () => {

  return (
    <Provider store={store}>
      <UserAuth />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
