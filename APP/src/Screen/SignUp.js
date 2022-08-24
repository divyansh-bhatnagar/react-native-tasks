import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, TextInput} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const SignUp = (props) => {
  const initialState = {
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    password: '',
  };

  const navigation = useNavigation();
  const [users, setUsers] = useState(initialState);
  const [error, setError] = useState([]);
  const [valid, setValid] = useState(false);

  const [show, setShow] = useState(false);

  const __isValidEmail = email => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(users.email).toLowerCase());
  }; //for validating the email (reg-ex)

  const __isValidPassword = password => {
   // console.log(users.password);
    let re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let result = re.test(String(users.password));
   // console.log(result);
    return re.test(String(users.password));
  }; //for validating the password (reg-ex)

  //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.

  const __doSingUp = () => {
    if (!users.email) {
      setError('email required *');
      setValid(false);
      return;
    } else if (!users.password) {
      setError('Password required *');
      setValid(false);
      return;
    } else if (!__isValidEmail(users.email)) {
      setError('Invalid email *');
      setValid(false);
      return;
    } else if (!__isValidPassword(users.password)) {
      setError(
        'Invalid Password. Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.',
      );
      setValid(false);
      return;
    } else {
      setValid(true);
    }

    doCreateUser(users);
  };

  const doCreateUser = async (users) => {
    try {
      let response = await AsyncStorage.setItem('users',users);
    //  console.log(response);
      if (response && response.users) {
        Alert.alert('Success ✅', 'Account created successfully', [
          {text: 'OK', onPress: () => navigation.navigate('SignIn')},
        ]);
        // navigation.navigate('SignIn');
      }
    } catch (e) {
      console.error(e.message);
    }
  };
  const onHandleRegister = async () => {
    let submitData = [];
    const getUsers = await AsyncStorage.getItem('users');
    if (getUsers && getUsers.length > 0) {
      const usersData = JSON.parse(getUsers);
      submitData = [
        ...usersData,
        {id: Math.random().toString(16).slice(2), ...users},
      ];
      navigation.navigate('SignIn');
    } else {
      submitData.push({id: Math.random().toString(16).slice(2), ...users});
    }
    //console.log('submitData', JSON.stringify(submitData, null, 2));
    await AsyncStorage.setItem('users', JSON.stringify(submitData));
    setUsers(initialState);
  };

 // console.log('users', users);

  const onHandleChange = (e) => {
   // console.log('e:', JSON.stringify(e.target, null, 2));
    const name = e.target._internalFiberInstanceHandleDEV.memoizedProps.name; // fetches name i.e "Testing"
    const value = e.nativeEvent.text;
    setUsers(prevState => ({...prevState, [name]: value}));
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View>
        <View>
          <Image
            source={require('../../assets/images/signup.jpg')}
            style={styles.img}
          />
        </View>
        <View>
          <View style={styles.flTxt}>
            <TextInput
              style={styles.inputF}
              name='firstName'
              label="First-Name"
              mode="outlined"
              value={users.firstName}
              onChange={(e) => onHandleChange(e)}
            />
            <TextInput
              style={styles.inputL}
              name='lastName'
              label="Last-Name"
              mode="outlined"
              onChange={(e) => onHandleChange(e)}
              value={users.lastName}
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
            value={users.address}
          />
          <TextInput
            style={styles.input}
            name='phone'
            label="Contact"
            mode="outlined"
            keyboardType="number-pad"
            onChange={(e) => onHandleChange(e)}
            value={users.phone}
          />
          <TextInput
            style={styles.input}
            name='email'
            label="Email"
            mode="outlined"
            keyboardType="email-address"
            onChange={(e) => onHandleChange(e)}
            value={users.email}
          />
          <TextInput
            style={styles.input}
            name='password'
            label="Password"
            mode="outlined"
            onChange={(e) => onHandleChange(e)}
            value={users.password}
            isPassword={true}
            //togglePassword={props.show}
            customShowPasswordComponent={
              <Entypo name="eye" size={24} color="#808080" />
            }
            customHidePasswordComponent={
              <Entypo name="eye-with-line" size={24} color="#808080" />
            }
          />
          <Button style={styles.btn} mode="contained" onPress={onHandleRegister}>
            Register
          </Button>
        </View>
        <View style={styles.text}>
          <Text style={styles.txt}>
            Alread have an account?
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.lgtxt}>Login!</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
