import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button style={styles.btn} mode="contained" onPress={() => navigation.navigate('Tab')}>
        Login
      </Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    alignSelf: 'center',
    marginTop: 20,
    width: 250,
  },
});
