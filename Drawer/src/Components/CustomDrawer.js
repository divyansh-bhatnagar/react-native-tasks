import {ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CustomDrawer(props) {
  return (
    <View style={styles.customDrawer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.customDrawerContentContainer}>
        <ImageBackground
          source={require('../../assets/images/menu-bg.jpeg')}
          style={styles.customDrawerBackground}>
          <Image
            source={require('../../assets/images/user-profile.jpg')}
            style={styles.profilepic}
          />
          <Text style={styles.customDrawerText}>Divyansh Bhatnagar</Text>
        </ImageBackground>

        <View style={styles.ListItem}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.customDrawerFooter}>
        <TouchableOpacity onPress={() => {}} styles={styles.to}>
          <View style={styles.footerView}>
            <Ionicons name="log-out" size={24} color="black" />
            <Text style={styles.text}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  customDrawer: {
    flex: 1,
  },
  customDrawerContentContainer: {
    backgroundColor: '#8200d6',
  },
  customDrawerBackground: {
    padding: 20,
  },
  profilepic: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 50,
    marginBottom: 10,
    marginLeft: 10,
  },
  customDrawerText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Roboto-Italic',
  },
  ListItem: {
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  to : {
    paddingVertical : 10,
  },
  customDrawerFooter: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerView: {
   alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    fontFamily: 'Roboto-medium',
    marginLeft: 10,
  },
});
