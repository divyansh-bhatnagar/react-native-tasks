import React from 'react';

import HomeScreen from './src/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
  
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SMS Messages" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;