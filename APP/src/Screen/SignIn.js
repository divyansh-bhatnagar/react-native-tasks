import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {loginSuccess} from '../Store/action';

const SignIn = () => {
  const initialState = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();
  const currentUsers = useSelector(state => state.reducer.currentuser);
  // console.log('currentUsers', JSON.stringify(currentUsers, null, 2));

  const navigation = useNavigation();

  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [valid, setValid] = useState(false);

  const [userDetail, setUserDetail] = useState(initialState);

  // console.log('userDetail', userDetail);

  const onHandleChange = e => {
    const name = e.target._internalFiberInstanceHandleDEV.memoizedProps.name; // fetches name i.e "Testing"
    const value = e.nativeEvent.text;
    setUserDetail(prevState => ({...prevState, [name]: value}));
  };

  const __isValidEmail = email => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(userDetail.email).toLowerCase());
  }; //for validating the email (reg-ex)

  const __isValidPassword = password => {
    // console.log(userDetail.password);
    let re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let result = re.test(String(userDetail.password));
    //console.log(result);
    return re.test(String(userDetail.password));
  }; //for validating the password (reg-ex)

  //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.

  const __doLogin = () => {
    if (!userDetail.email) {
      setError('email required *');
      setValid(false);
      return;
    } else if (!userDetail.password) {
      setError('Password required *');
      setValid(false);
      return;
    } else if (!__isValidEmail(userDetail.email)) {
      setError('Invalid email *');
      setValid(false);
      return;
    } else if (!__isValidPassword(userDetail.password)) {
      setError(
        'Invalid Password. Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.',
      );
      setValid(false);
      return;
    } else {
      setValid(true);
    }
    if (valid) __doSingIn(userDetail.email, userDetail.password);
  };

  const __doSingIn = async user => {
    try {
      const jsonValue = await AsyncStorage.getItem('user', user);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error(e.message);
    }
  };

  const onHandleLogin = async () => {
    let loginData = [];
    // __doLogin();
    const fetchedUser = await AsyncStorage.getItem('users');
    if (fetchedUser) {
      console.log('if 1', fetchedUser);
      const logedInData = JSON.parse(fetchedUser);
      loginData = logedInData;
    }
    if (loginData.some(user => user.email === userDetail.email)) {
      if (loginData.some(user => user.password === userDetail.password)) {
        console.log('if 2 ....');
        dispatch(loginSuccess(userDetail));
        await AsyncStorage.setItem('currentuser', JSON.stringify(userDetail));
        navigation.navigate('HomeScreen');
      } else {
        setError('Invalid Password');
      }
    } else {
      setError('Invalid Email');
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
            name="email"
            onChange={onHandleChange}
          />
          <TextInput
            style={styles.input}
            label="Password"
            mode="outlined"
            name="password"
            onChange={onHandleChange}
          />
          <Button style={styles.btn} mode="contained" onPress={onHandleLogin}>
            Sign In
          </Button>
        </View>
        <View style={styles.text}>
          <Text style={styles.txt}>
            Don't have an account?
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.lgtxt}>Register!</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

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
