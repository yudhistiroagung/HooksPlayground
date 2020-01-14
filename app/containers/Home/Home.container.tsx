import React, { useEffect } from 'react';

import { View, ActivityIndicator } from 'react-native';

import style from './Home.style';
import { ActionBar, ProductList } from '../../components';

import { useProducts } from '../../hooks';

export const Home = () => {
  const { loading, products, fetchAll } = useProducts();

  useEffect(() => {
    fetchAll();
  }, []);

  const _renderContent = () => {
    return loading ? (
      <ActivityIndicator size="small" color="green" />
    ) : (
      <ProductList products={products} />
    );
  };

  return (
    <View style={style.container}>
      <ActionBar />
      {_renderContent()}
    </View>
  );
};
