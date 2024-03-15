import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/rootNavigator';
import MyProvider from './src/context/provider';

function App() {
  return (
    <MyProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </MyProvider>
  );
}

export default App;
