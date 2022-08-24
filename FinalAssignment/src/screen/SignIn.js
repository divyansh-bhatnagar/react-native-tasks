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
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import Entypo from 'react-native-vector-icons/Entypo';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import CustomInputSI from '../component/CustomInputSI';

const initialState = {
    email: '',
    password: '',
  };

const SignIn = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions(); //get the height of the screen for responsive design
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [valid, setValid] = useState(false);

  const [userDetail, setUserDetail] = useState(initialState);

  console.log("userDetail", userDetail);

  const onHandleChange = (e) => {
    const name = e.target._internalFiberInstanceHandleDEV.memoizedProps.name // fetches name i.e "Testing"
    const value = e.nativeEvent.text
    setUserDetail((prevState) => ({...prevState, [name]: value}));  
  }

//   const navigation = useNavigation(); //for navigating to other screens

  const __isValidEmail = email => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(userDetail.email).toLowerCase());
  }; //for validating the email (reg-ex)

  const __isValidPassword = password => {
    console.log(userDetail.password);
    let re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let result = re.test(String(userDetail.password));
    console.log(result);
    return re.test(String(userDetail.password));
  }; //for validating the password (reg-ex)

  //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.

  // const __doLogin = () => {
  //   if (!userDetail.email) {
  //     setError('email required *');
  //     setValid(false);
  //     return;
  //   } else if (!userDetail.password) {
  //     setError('Password required *');
  //     setValid(false);
  //     return;
  //   } else if (!__isValidEmail(userDetail.email)) {
  //     setError('Invalid email *');
  //     setValid(false);
  //     return;
  //   } else if (!__isValidPassword(userDetail.password)) {
  //     setError(
  //       'Invalid Password. Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.',
  //     );
  //     setValid(false);
  //     return;
  //   } else {
  //     setValid(true);
  //   }

  //   __doSingIn(userDetail.email, userDetail.password);
  // };

  // const __doSingIn = async (user) => {
  //   try {
  //       const jsonValue = await AsyncStorage.getItem('user', user);
  //       return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // };

  const onHandleLogin = async () => {
    let loginData = [];
    const fetchedUser = await AsyncStorage.getItem('users');
    if (fetchedUser) {
      const logedInData = JSON.parse(fetchedUser);
      loginData = logedInData;
    }
        if (loginData.some(user => user.email === userDetail.email)) {
          if (loginData.some(user => user.password === userDetail.password)) {
            navigation.navigate('Home');
            sendData = await AsyncStorage.setItem('currentuser', JSON.stringify(userDetail));
          } else {
            setError('Invalid Password');
          }
        } else {
          setError('Invalid Email');
        }
          
    }

  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.img}>
        <Image
          source={require('../../assets/images/signin.jpg')}
          style={styles.logo}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <CustomInputSI
           userDetail={userDetail}
            show={show}
            onHandleChange={onHandleChange}
          />
        </View>
        {error ? (
          <View style={styles.errorLabelContainerStyle}>
            <Text style={styles.errorTextStyle}>{error}</Text>
          </View>
        ) : null}
        <View>
          <Button title="Login" onPress={onHandleLogin} />
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SignUp')}>
            <Text>
              Don't have an account ?{' '}
              <Text style={styles.loginbtn}>Register !</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  img: {
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
  },
  innerContainer: {},
  errorLabelContainerStyle: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  loginbtn: {
    color: '#6082B6',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
});
