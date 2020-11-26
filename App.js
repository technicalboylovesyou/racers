/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppQ from './src/navigation/AppNavigator';
import {getRacers} from './src/actions/racers';

const App: () => React$Node = () => {
  return (
    <>
      <AppQ />
    </>
  );
};

export default App;
