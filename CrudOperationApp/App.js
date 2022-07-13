import React from 'react';
import store from './store/store';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
