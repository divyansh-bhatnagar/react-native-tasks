import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyProfile from '../Screens/MyProfile';
import AboutUs from '../Screens/AboutUs';
import ContactUs from '../Screens/ContactUs';
import AppStack from '../navigation/AppStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../Screens/Home';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';


function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home' || 'HomeTab':
      return 'Home';
    case 'Profile':
      return 'Profile';
    case 'About':
      return 'About';
    case 'Contact':
      return 'Contact';
  }
}

const Tab = createBottomTabNavigator();

const CustomBottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={({ route }) =>({
          headerTitle: getHeaderTitle(route),
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={MyProfile}
        options={({ route }) =>({
          headerTitle: getHeaderTitle(route),
          tabBarIcon: ({color}) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="About"
        component={AboutUs}
        options={({ route }) =>({
          headerTitle: getHeaderTitle(route),
          tabBarIcon: ({color}) => (
            <MaterialIcons name="info-outline" size={24} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Contact"
        component={ContactUs}
        options={({ route }) =>({
          headerTitle: getHeaderTitle(route),
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-mail-outline" size={24} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default CustomBottomTab;
