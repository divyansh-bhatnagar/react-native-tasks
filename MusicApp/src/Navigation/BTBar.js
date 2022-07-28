import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import TrackList from '../screen/TrackList';
import Search from '../screen/Search';
import LibraryListScreen from '../screen/LibraryListScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MusicDisplayScreen from '../screen/MusicDisplayScreen';

const Tab = createMaterialBottomTabNavigator();

export default function BTBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#000'}}
        shifting={true}>
        <Tab.Screen
          name="Mucsi"
          component={MusicDisplayScreen}
          options={{
            tabBarLabel: 'Music',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="music-box" size={26} color={'white'} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: () => (
              <Ionicons name="ios-search-outline" size={24} color={'white'} />
            ),
          }}
        />
        <Tab.Screen
          name="PlayList"
          component={LibraryListScreen}
          options={{
            tabBarLabel: 'PlayList',
            tabBarIcon: () => (
              <SimpleLineIcons name="playlist" size={24} color={'white'} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
