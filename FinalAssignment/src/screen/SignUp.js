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
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import Entypo from 'react-native-vector-icons/Entypo';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import CustomInputSU from '../component/CustomInputSU';

const initialState = {
  firstName: '',
  lastName: '',
  address: '',
  phone: '',
  email: '',
  password: '',
  phone: '',
};

const SignUp = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState(initialState);
  const [error, setError] = useState([]);
  const [valid, setValid] = useState(false);

  const [show, setShow] = useState(false);

  //   const navigation = useNavigation(); //for navigating to other screens

const onHandleChange = (e) => {
  const name = e.target._internalFiberInstanceHandleDEV.memoizedProps.name // fetches name i.e "Testing"
  const value = e.nativeEvent.text
  setUsers((prevState) =>({...prevState, [name]: value}));
  
    
}

  const __isValidEmail = email => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(users.email).toLowerCase());
  }; //for validating the email (reg-ex)

  const __isValidPassword = password => {
    console.log(users.password);
    let re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let result = re.test(String(users.password));
    console.log(result);
    return re.test(String(users.password));
  }; //for validating the password (reg-ex)

  //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.

  // const __doSingUp = () => {
  //   if (!users.email) {
  //     setError('email required *');
  //     setValid(false);
  //     return;
  //   } else if (!users.password) {
  //     setError('Password required *');
  //     setValid(false);
  //     return;
  //   } else if (!__isValidEmail(users.email)) {
  //     setError('Invalid email *');
  //     setValid(false);
  //     return;
  //   } else if (!__isValidPassword(users.password)) {
  //     setError(
  //       'Invalid Password. Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.',
  //     );
  //     setValid(false);
  //     return;
  //   } else {
  //     setValid(true);
  //   }

  //   doCreateUser(users);
  // };

  // const doCreateUser = async (users) => {
  //   try {
  //     let response = await AsyncStorage.setItem('users',users);
  //     console.log(response);
  //     if (response && response.users) {
  //       Alert.alert('Success ✅', 'Account created successfully', [
  //         {text: 'OK', onPress: () => navigation.navigate('SignIn')},
  //       ]);
  //       // navigation.navigate('SignIn');
  //     }
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // };
  const onHandleRegister = async () => {
    let submitData = [];
    const getUsers = await AsyncStorage.getItem('users');
    if(getUsers && getUsers.length > 0){
      const usersData = JSON.parse(getUsers);
      submitData = [...usersData, {id: Math.random().toString(16).slice(2), ...users}];
    } else {
      submitData.push({id: Math.random().toString(16).slice(2), ...users});
    }
    console.log("submitData", JSON.stringify(submitData, null, 2));
    await AsyncStorage.setItem('users', JSON.stringify(submitData));
    setUsers(initialState);
  }

console.log('users', users);

  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.img}>
        <Image
          source={require('../../assets/images/signup.jpg')}
          style={styles.logo}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <CustomInputSU
              users={users}
              show={show}
              setShow={setShow}
              onHandleChange={onHandleChange}
            />
          </View>
          {/* {error ? (
            <View style={styles.errorLabelContainerStyle}>
              <Text style={styles.errorTextStyle}>{error}</Text>
            </View>
          ) : null} */}
          <View style={styles.footer}>
            <Button title="Register" onPress={
              onHandleRegister
            } />
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SignIn')}>
              <Text>
                I've already an account ?{' '}
                <Text style={styles.loginbtn}>Login !</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignUp;

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
  footer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btn: {
    marginTop: 20,
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
