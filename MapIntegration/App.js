import React from 'react';
import Login from './src/Screens/Login';
import store from './src/Store/store';
import {Appnavigation, AuthNavigation} from './src/Navigation/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector, Provider} from 'react-redux';

const App = () => {
  const {accessToken} = useSelector(state => state.reducer);
  // console.log("accessToken from app.js", JSON.stringify(accessToken, null, 2));
 // console.log("accessToken from app.js", JSON.stringify(accessToken.status, null, 2));
  return (
    <NavigationContainer>
      {accessToken !== null ? <Appnavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Main;
