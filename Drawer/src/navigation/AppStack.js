import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import CustomDrawer from '../Components/CustomDrawer';
import AboutUs from '../Screens/AboutUs';
import ContactUs from '../Screens/ContactUs';
import Home from '../Screens/Home';
import MyProfile from '../Screens/MyProfile';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Auth from './AuthStack';
import CustomBottomTab from '../Components/CustomBottomTab';
import {TouchableOpacity} from 'react-native';
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

const Drawer = createDrawerNavigator();
export default AppStack = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />} //custom drawer
      screenOptions={{
        headerRight: false,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Ionicons name="ios-menu" size={24} color="black" />
          </TouchableOpacity>
        ),
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 15,
          fontFamily: 'Roboto-Medium',
        },
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
      }}
      //initialRouteName={'Home'}
    >
      <Drawer.Screen
        name="Home"
        component={CustomBottomTab}
        options={({ route }) =>({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Ionicons name="ios-menu" size={24} color="black" />
            </TouchableOpacity>
          ),
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        })}
      />
      <Drawer.Screen
        name="Profile"
        component={MyProfile}
        options={ ({ route }) =>({
          headerTitle: getHeaderTitle(route) !== 'Profile' ? 'Profile' : getHeaderTitle(route) ,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Ionicons name="ios-menu" size={24} color="black" />
            </TouchableOpacity>
          ),
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        })}
      />
      <Drawer.Screen
        name="About"
        component={AboutUs}
        options={({ route }) =>({
          headerTitle: getHeaderTitle(route) !== 'About' ? 'About' : getHeaderTitle(route),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Ionicons name="ios-menu" size={24} color="black" />
            </TouchableOpacity>
          ),
          drawerIcon: ({color}) => (
            <MaterialIcons name="info-outline" size={24} color={color} />
          ),
        })}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactUs}
        options={({ route }) =>({
          headerTitle: getHeaderTitle(route) !== 'Contact' ? 'Contact' : getHeaderTitle(route),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Ionicons name="ios-menu" size={24} color="black" />
            </TouchableOpacity>
          ),
          drawerIcon: ({color}) => (
            <Ionicons name="ios-mail-outline" size={24} color={color} />
          ),
        })}
      />
    </Drawer.Navigator>
  );
};
