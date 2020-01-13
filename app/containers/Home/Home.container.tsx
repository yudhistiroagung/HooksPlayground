import React, {useState, useEffect} from 'react';

import {View, ActivityIndicator} from 'react-native';

import style from './Home.style';
import {Product} from '../../models';
import {ProductList} from '../../components';

import ProductApi from '../../api/ProductApi';

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await ProductApi.getProducts();
      setProducts([...res]);
      setLoading(false);
    };
    getProducts();
  }, []);

  console.log('loading', loading);

  const _renderContent = () => {
    return loading ? (
      <ActivityIndicator size="small" color="green" />
    ) : (
      <ProductList products={products} />
    );
  };

  return <View style={style.container}>{_renderContent()}</View>;
};
