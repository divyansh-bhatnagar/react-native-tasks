import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

const MyProfile = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    password: '',
  };
  const [users, setUsers] = useState(initialState);
  const [error, setError] = useState([]);
  const [valid, setValid] = useState(false);

  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
      <Image
            source={require('../../assets/images/user-profile.jpg')}
            style={styles.profilepic}
          />
        <View style={styles.flTxt}>
        <TextInput
              style={styles.inputF}
              name='firstName'
              label="First-Name"
              mode="outlined"
              value={'Divyansh'}
              onChange={(e) => onHandleChange(e)}
            />
            <TextInput
              style={styles.inputL}
              name='lastName'
              label="Last-Name"
              mode="outlined"
              onChange={(e) => onHandleChange(e)}
              value={'Bhatnagar'}
            />
          </View>
          <TextInput
            style={styles.input}
            name='address'
            label="Address"
            mode="outlined"
            numberOfLines={5}
            multiline={true}
            onChange={(e) => onHandleChange(e)}
            value={'Ahmedabad'}
          />
          <TextInput
            style={styles.input}
            name='phone'
            label="Contact"
            mode="outlined"
            keyboardType="number-pad"
            onChange={(e) => onHandleChange(e)}
            value={'+91 9409272958'}
          />
          <TextInput
            style={styles.input}
            name='email'
            label="Email"
            mode="outlined"
            keyboardType="email-address"
            onChange={(e) => onHandleChange(e)}
            value={'divyansh.bhatnagar@bacancy.com'}
          />
          <TextInput
            style={styles.input}
            name='password'
            label="Password"
            mode="outlined"
            onChange={(e) => onHandleChange(e)}
            value={'**********'}
            isPassword={true}
            //togglePassword={props.show}
            customShowPasswordComponent={
              <Entypo name="eye" size={24} color="#808080" />
            }
            customHidePasswordComponent={
              <Entypo name="eye-with-line" size={24} color="#808080" />
            }
          />
          <Button style={styles.btn} mode="contained" onPress={() => {}}>
            Register
          </Button>
      </ScrollView>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    profilepic: {
        marginTop: 10,
        alignSelf: 'center',
        width: 140,
        height: 140,
        resizeMode: 'contain',
        borderRadius: 50,
        marginBottom: 10,
        marginLeft: 10,
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
        marginBottom: 20,
      },
      text: {
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 50,
      },
      txt: {
        fontSize: 16,
      },
      lgtxt: {
        fontSize: 18,
        color: '#00aaff',
      },
});
