import { IProductApi } from './IProductApi';
import { Product } from 'app/models';

// fake api for product
class ProductApi implements IProductApi {

    private products: Product[] = [];

    public async getProducts(): Promise<Product[]> {
        return this.products;
    }

    public async addProduct(payload: Omit<Product, 'id'> ): Promise<Product> {
        const id: string = Date.now().toString();
        const product: Product = {
            id,
            ...payload
        };
        this.products.push(product);
        return product;
    }

    public async updateProduct(product: Product): Promise<Product> {
        const idx: number = this.findIndex(product.id);
        if (idx < 0)
            throw new Error('Product not found');
        this.products[idx] = product;
        return product;
    }

    public async deleteProduct(id: string): Promise<void> {
        const idx: number = this.findIndex(id);
        if (idx < 0)
            throw new Error('Product not found');
        this.products.splice(idx, 1);
    }

    private findIndex(id: string): number {
        return this.products.findIndex((p: Product) => p.id === id)
    }

}