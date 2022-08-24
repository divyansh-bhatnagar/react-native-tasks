import React, {useState, useEffect} from 'react';
import {AppNavigation, AuthNavigation} from '../Navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const loggedIn = useSelector(state => state.reducer.islogin);
  // console.log('loggedIn', JSON.stringify(loggedIn, null, 2));

  useEffect(() => {
    const checkAuth = async () => {
      const user = await AsyncStorage.getItem('currentuser');
     // console.log('users:', user);
     console.log('loggedIn :', loggedIn);
      if (loggedIn || user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    };
    checkAuth();
  }, [loggedIn]);

   console.log('authenticated', authenticated);

  return (
    <NavigationContainer>
      {authenticated ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default UserAuth;
