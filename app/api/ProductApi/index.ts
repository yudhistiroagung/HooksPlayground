import {ProductApi} from './ProductApi';
import {IProductApi} from './IProductApi';

export * from './IProductApi';

export default new ProductApi() as IProductApi;
