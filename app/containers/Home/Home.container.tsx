import React, {useState} from 'react';

import {View} from 'react-native';

import style from './Home.style';
import {Product} from '../../models';
import {ProductList} from '../../components';

const dummyProducts: Product[] = [
  {
    id: '123',
    name: 'Nasi Goreng',
    unitCost: 7000,
    price: 12000,
  },
  {
    id: '124',
    name: 'Ayam Goreng',
    unitCost: 8000,
    price: 13000,
  },
];

export const Home = () => {
  const [products, setProducts] = useState<Product[]>(dummyProducts);

  return (
    <View style={style.container}>
      <ProductList products={products} />
    </View>
  );
};
