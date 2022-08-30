import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { gettingData } from '../Store/action';

const Login = () => {

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const username = 'api@moxieuniverse.com';
  const pass = '3uXctfArCD9sXO88x7ZnY7CF';

  const handleSubmit = () => {
    var emailValid = false;
    if (email.length == 0) {
      setEmailError('Email is required');
    } else if (email.length < 6) {
      setEmailError('Email should be minimum 6 characters');
    } else if (email.indexOf(' ') >= 0) {
      setEmailError('Email cannot contain spaces');
    } else {
      setEmailError('');
      emailValid = true;
    }

    var passwordValid = false;
    if (password.length == 0) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password should be minimum 6 characters');
    } else if (password.indexOf(' ') >= 0) {
      setPasswordError('Password cannot contain spaces');
    } else {
      setPasswordError('');
      passwordValid = true;
    }

    if (emailValid && passwordValid) {
      dispatch(gettingData(email,password))
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View>
        <View>
          <Image
            source={require('../../assets/images/signin.jpg')}
            style={styles.img}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            label="Password"
            mode="outlined"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button style={styles.btn} mode="contained" onPress={handleSubmit}>
            Login
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  img: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginTop: 20,
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
