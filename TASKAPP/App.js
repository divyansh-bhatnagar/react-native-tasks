import React from 'react';

import {Provider} from 'react-redux';
import Store from './src/store/store';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <Provider store={Store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
