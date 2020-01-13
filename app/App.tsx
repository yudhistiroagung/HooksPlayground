/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, View, StatusBar} from 'react-native';

declare var global: {HermesInternal: null | {}};

const App = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log('didMount');
    return () => {
      console.log('willUnMount');
    };
  });

  const changeVisibility = () => {
    setVisible(!visible);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title="cek" onPress={changeVisibility} />
        {visible && <MiniComponent />}
      </SafeAreaView>
    </>
  );
};

const MiniComponent = () => {
  useEffect(() => {
    console.log('mini mounted');
    return () => {
      console.log('mini will unmounted');
    };
  });

  return <View style={{height: 20, width: 20, backgroundColor: 'green'}} />;
};

export default App;
