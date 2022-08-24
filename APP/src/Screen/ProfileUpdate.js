import {StyleSheet, Text, View, Modal, ScrollView} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileUpdate = ({route}) => {
  const initialState = {
    firstName: route.params.firstName,
    lastName: route.params.lastName,
    address: route.params.address,
    phone: route.params.phone,
    email: route.params.email,
    password: route.params.password,
    id: route.params.id,
  };
  const [userData, setUserData] = useState(initialState);
  // console.log('route.params:', route.params);

  const onHandleUpdate = async () => {
    try {
      const strigifiedArray = await AsyncStorage.getItem('users');
      const usersArray = JSON.parse(strigifiedArray);
      console.log('usersArray: ', usersArray);
      const updatedUsersArray = usersArray.map(userDetail => {
        if (userDetail.id === userData.id) {
          return userData;
        } else {
          return userDetail;
        }
      });
      await AsyncStorage.setItem('users', JSON.stringify(updatedUsersArray));
      console.log('updatedUsersArray: ', updatedUsersArray);
    } catch (error) {
      console.log('error:', error);
    }
  };

  console.log('dataFromState: ', userData);

  return (
    <View>
      <ScrollView>
        <View style={styles.flTxt}>
          <TextInput
            style={styles.inputF}
            label="First Name"
            mode="outlined"
            name="firstName"
            value={userData.firstName}
            onChange={e =>
              setUserData(prevState => ({
                ...prevState,
                firstName: e.nativeEvent.text,
              }))
            }
          />
          <TextInput
            style={styles.inputL}
            label="Last Name"
            mode="outlined"
            value={userData.lastName}
            onChange={e =>
              setUserData(prevState => ({
                ...prevState,
                lastName: e.nativeEvent.text,
              }))
            }
          />
        </View>
        <TextInput
          style={styles.input}
          label="Address"
          mode="outlined"
          numberOfLines={5}
          multiline={true}
          value={userData.address}
          onChange={e =>
            setUserData(prevState => ({
              ...prevState,
              address: e.nativeEvent.text,
            }))
          }
        />
        <TextInput
          style={styles.input}
          label="Contact"
          mode="outlined"
          keyboardType="number-pad"
          value={userData.phone}
          onChange={e =>
            setUserData(prevState => ({
              ...prevState,
              phone: e.nativeEvent.text,
            }))
          }
        />
        {/* <TextInput
          style={styles.input}
          // label="Email"
          mode="outlined"
          keyboardType="email-address"
          value={route.params.currentUserInfo}
        /> */}
        <Button style={styles.btn} mode="contained" onPress={onHandleUpdate}>
          Update
        </Button>
      </ScrollView>
    </View>
  );
};

export default ProfileUpdate;

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginTop: 20,
  },
  flTxt: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  inputF: {
    marginTop: 20,
    //marginBottom: 20,
    alignSelf: 'center',
    width: 150,
  },
  inputL: {
    marginTop: 20,
    //marginBottom: 20,
    alignSelf: 'center',
    width: 150,
  },
  input: {
    marginTop: 20,
    //marginBottom: 20,
    alignSelf: 'center',
    width: 250,
  },
  btn: {
    alignSelf: 'center',
    marginTop: 20,
    width: 250,
  },
});
