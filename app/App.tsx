/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import 'react-native-gesture-handler';

import {Home} from './containers';

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <Home />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default App;
