import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CustomInputSI = props => {
  const {userDetail, onHandleChange} = props;
  return (
    <View>
      <View style={styles.input}>
        <TextInput
          placeholder="Email"
          value={userDetail.email}
          name="email"
          onChange={(e) => onHandleChange(e)}
          hint="abc@mail.com"
          customLabelStyles={styles.customLabelStyles}
          labelStyles={styles.labelStyles}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Password"
          name="password"
          onChange={(e) => onHandleChange(e)}
          value={userDetail.password}
          isPassword={true}
          togglePassword={props.show}
          customShowPasswordComponent={
            <Entypo name="eye" size={24} color="#808080" />
          }
          customHidePasswordComponent={
            <Entypo name="eye-with-line" size={24} color="#808080" />
          }
          customLabelStyles={styles.customLabelStyles}
          labelStyles={styles.labelStyles}
        />
      </View>
    </View>
  );
};

export default CustomInputSI;

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
});
