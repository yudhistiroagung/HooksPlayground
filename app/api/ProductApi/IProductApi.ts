import {Product} from '../../models';

export interface IProductApi {
  getProducts: () => Promise<Product[]>;
  addProduct: (payload: Omit<Product, 'id'>) => Promise<Product>;
  updateProduct: (payload: Product) => Promise<Product>;
  deleteProduct: (id: string) => Promise<void>;
}
