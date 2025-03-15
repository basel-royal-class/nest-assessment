import { ProductEntity } from '../../../products-catalog-system/products/entity/product.entity';
import { CartEntity } from '../../cart/entity/cart.entity';
export declare class CartItemEntity {
    id: number;
    quantity: number;
    price: number;
    product_id: number;
    cart_id: number;
    cart: CartEntity;
    product: ProductEntity;
}
