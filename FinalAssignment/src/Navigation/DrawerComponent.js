import {View, Text} from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Result from '../screen/Result';
import Home from '../screen/Home';

const Drawer = createDrawerNavigator();

export function CustomDrawerContent(props) {
  //const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Log Out"
        onPress={async () => {
          try {
            await firebase.auth().signOut();
            //console.log(props.navigation.getState());
            //props.navigation.navigate('SignIn');
            //navigation.navigate('AuthNavigation', {screen: 'SignIn'});
          } catch (e) {
            console.error(e.message);
          }
        }}
      />
    </DrawerContentScrollView>
  );
}

const DrawerComponent = props => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="result" component={Result} />
    </Drawer.Navigator>
  );
};

export default DrawerComponent;
