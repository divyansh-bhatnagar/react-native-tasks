import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import MyProfile from '../Screens/MyProfile';
import AboutUs from '../Screens/AboutUs';
import ContactUs from '../Screens/ContactUs';

const Drawer = createDrawerNavigator();

export default function AppStack() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={MyProfile} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
    </Drawer.Navigator>
  );
}
