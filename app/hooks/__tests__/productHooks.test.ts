import {IProductApi} from '../../api/ProductApi/IProductApi';
import {Product} from '../../models';

import {renderHook, cleanup, act} from '@testing-library/react-hooks';

import {useProducts} from '../UseProducts';

const mockProducts: Product[] = [
  {
    id: '123',
    name: 'Ayam',
    unitCost: 10000,
    price: 15000,
  },
];

jest.mock('../../api', () => {
  return {
    ProductApi: {
      addProduct: (payload: Omit<Product, 'id'>) => Promise.resolve(payload),
      updateProduct: (p: Product) => Promise.resolve(p),
      deleteProduct: (id: string) => Promise.resolve(),
      getProducts: () => Promise.resolve(mockProducts),
    } as IProductApi,
  };
});

afterEach(() => cleanup());

describe('useProduct', () => {
  it('fetchAll', async () => {
    const {result} = renderHook(() => useProducts());
    expect(result.current.products.length).toBe(0);
    expect(result.current.loading).toBe(false);
    await act(async () => {
      await result.current.fetchAll();
    });
    expect(result.current.loading).toBe(false);
    expect(result.current.products.length).toBe(mockProducts.length);
  });
});
