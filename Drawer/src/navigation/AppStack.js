import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import CustomDrawer from '../Components/CustomDrawer';
import AboutUs from '../Screens/AboutUs';
import ContactUs from '../Screens/ContactUs';
import Home from '../Screens/Home';
import MyProfile from '../Screens/MyProfile';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();
export default AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />} //custom drawer
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 15,
          fontFamily: 'Roboto-Medium',
        },
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
      }}
      initialRouteName={'Home'}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={MyProfile}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutUs}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="info-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactUs}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="ios-mail-outline" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
