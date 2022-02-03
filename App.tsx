import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/routes/DrawerNavigator';
import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <DrawerNavigator />

      </Provider>
    </NavigationContainer>
  );
};

export default App;
