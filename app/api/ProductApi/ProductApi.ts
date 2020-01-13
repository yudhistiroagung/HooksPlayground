import {IProductApi} from './IProductApi';
import {Product} from '../../models';
import {delay} from '../../utils/PromiseUtils';

const initialDummyData: Product[] = [
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

// fake api for product
export class ProductApi implements IProductApi {
  private products: Product[] = [...initialDummyData];

  public async getProducts(): Promise<Product[]> {
    await delay(1000);
    return this.products;
  }

  public async addProduct(payload: Omit<Product, 'id'>): Promise<Product> {
    const id: string = Date.now().toString();
    const product: Product = {
      id,
      ...payload,
    };
    this.products.push(product);
    await delay(500);
    return product;
  }

  public async updateProduct(product: Product): Promise<Product> {
    await delay(500);
    const idx: number = this.findIndex(product.id);
    if (idx < 0) {
      throw new Error('Product not found');
    }
    this.products[idx] = product;
    return product;
  }

  public async deleteProduct(id: string): Promise<void> {
    await delay(500);
    const idx: number = this.findIndex(id);
    if (idx < 0) {
      throw new Error('Product not found');
    }
    this.products.splice(idx, 1);
  }

  private findIndex(id: string): number {
    return this.products.findIndex((p: Product) => p.id === id);
  }
}
