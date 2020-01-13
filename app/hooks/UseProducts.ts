import {useState} from 'react';
import {Product} from '../models';

import {ProductApi} from '../api';

interface UseProductsHooks {
  loading: boolean;
  products: Product[];
  error?: string;
  fetchAll: () => Promise<void>;
  add: (product: Omit<Product, 'id'>) => Promise<void>;
  update: (product: Product) => Promise<void>;
  remove: (id: string) => Promise<void>;
}

export const useProducts = (): UseProductsHooks => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAll = async () => {
    setLoading(true);
    const res: Product[] = await ProductApi.getProducts();
    setProducts(res);
    setLoading(false);
  };

  const add = async (payload: Omit<Product, 'id'>) => {
    setLoading(true);
    await ProductApi.addProduct(payload);
    fetchAll();
  };

  const update = async (product: Product) => {
    setLoading(true);
    try {
      await ProductApi.updateProduct(product);
    } catch (e) {}
    fetchAll();
    setLoading(false);
  };

  const remove = async (id: string) => {
    setLoading(true);
    try {
      await ProductApi.deleteProduct(id);
    } catch (e) {}
    fetchAll();
  };

  return {
    loading,
    products,
    fetchAll,
    add,
    update,
    remove,
  };
};
