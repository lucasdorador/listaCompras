import React from 'react';
import {Provider} from 'react-redux';
import store from './store/configureReduxStore';
import {NavigationContainer} from '@react-navigation/native';
import {Router} from './router/Router';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
