import { OrderEntity } from '../../orders/entity/order.entity';
import { ProductEntity } from 'src/modules/products-catalog-system/products/entity/product.entity';
export declare class OrderItemEntity {
    id: number;
    quantity: number;
    price: number;
    product_id: number;
    order_id: number;
    order: OrderEntity;
    product: ProductEntity;
}
