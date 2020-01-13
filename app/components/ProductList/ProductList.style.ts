import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flatList: {
    width: '100%',
  },
  itemSeparator: {
    height: 1.5,
    backgroundColor: '#e8e8e8',
    marginLeft: 16,
  },
  itemContainer: {
    height: 70,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  initial: {
    height: 50,
    width: 50,
    backgroundColor: '#999999',
    marginRight: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  initialText: {
    color: '#ffffff',
    fontSize: 24,
  },
  title: {
    color: '#333333',
  },
  price: {
    color: '#999999',
  },
});
