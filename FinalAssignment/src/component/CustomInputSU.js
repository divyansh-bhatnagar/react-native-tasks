import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
  Image,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Entypo from 'react-native-vector-icons/Entypo';

const CustomInputSU = props => {
  const {users, onHandleChange} = props;
  return (
    <View>
      <View style={[styles.input, styles.FLName]}>
        <TextInput
          placeholder="First Name"
          value={users.firstName}
          name="firstName"
          onChange={(e) => onHandleChange(e,)}
          customLabelStyles={styles.customLabelStyles}
          labelStyles={styles.labelStyles}
        />

        <TextInput
          placeholder="Last Name"
          value={users.lastName}
          name="lastName"
          onChange={(e) => onHandleChange(e,)}
          customLabelStyles={styles.customLabelStyles}
          labelStyles={styles.labelStyles}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Address"
          multiline={true}
          numberOfLines={4}
          value={users.address}
          name="address"
          onChange={(e) => onHandleChange(e,)}
          customLabelStyles={styles.customLabelStyles}
          labelStyles={styles.labelStyles}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="phone"
          value={users.phone}
          name="phone"
          onChange={(e) => onHandleChange(e,)}
          staticLabel
          hintTextColor={'#aaa'}
          keyboardType="numeric"
          mask="+91 999-999-9999"
          hint="+91 999-999-9999"
          customLabelStyles={styles.customLabelStyles}
          labelStyles={styles.labelStyles}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Email"
          value={users.email}
          name="email"
          onChange={(e) => onHandleChange(e)}
          //mask="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          hint="abc@mail.com"
          customLabelStyles={styles.customLabelStyles}
          labelStyles={styles.labelStyles}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Password"
          value={users.password}
          isPassword={true}
          togglePassword={props.show}
          name="password"
          onChange={(e) => onHandleChange(e)}
          customShowPasswordComponent={
            <Entypo name="eye" size={24} color="#808080" />
          }
          customHidePasswordComponent={
            <Entypo name="eye-with-line" size={24} color="#808080" />
          }
          labelStyles={styles.labelStyles}
          customLabelStyles={styles.customLabelStyles}
        />
      </View>
    </View>
  );
};

export default CustomInputSU;

const styles = StyleSheet.create({
  FLName: {
    flexDirection: 'row',
  },
  input: {
    marginBottom: 10,
  },
  customLabelStyles: {
    colorFocused: '#6082B6',
    fontSizeFocused: 12,
  },
  labelStyles: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  showPasswordImageStyles: {
    tintColor: '#6082B6',
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
