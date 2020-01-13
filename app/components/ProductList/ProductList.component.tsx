import React from 'react';
import {Product} from 'app/models';
import {FlatList, View, TouchableOpacity, Text} from 'react-native';

import style from './ProductList.style';
import {createIntialName} from '../../utils/StringUtils';

interface Props {
  products: Product[];
}

export const ProductList = (props: Props) => {
  const {products} = props;

  const _renderItem = (item: Product) => {
    console.log('render', item.name);
    return (
      <TouchableOpacity style={style.itemContainer}>
        <View style={style.initial}>
          <Text style={style.initialText}>{createIntialName(item.name)}</Text>
        </View>

        <View>
          <Text style={style.title}>{item.name}</Text>
          <Text style={style.price}>{`Rp ${item.price}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const _renderSeparator = () => {
    return <View style={style.itemSeparator} />;
  };

  return (
    <FlatList
      style={style.flatList}
      data={products}
      renderItem={({item}) => _renderItem(item)}
      ItemSeparatorComponent={_renderSeparator}
    />
  );
};
