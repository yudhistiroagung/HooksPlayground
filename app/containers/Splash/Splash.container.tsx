import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import style from './Splash.style';

export const Splash = () => {
  useEffect(() => {
    goToHome();
  }, []);

  const goToHome = () => {
    setTimeout(() => {}, 2000);
  };

  return (
    <View style={style.container}>
      <Text>SPLASH</Text>
    </View>
  );
};
