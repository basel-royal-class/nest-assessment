import { CategoryEntity } from '../../categories/entity/category.entity';
import { OrderItemEntity } from '../../../orders-management-system/order_items/entity/order.item.entity';
import { CartItemEntity } from '../../../shopping-cart-system/cart_item/entity/cart.item.entity';
export declare class ProductEntity {
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    created_at: Date;
    category: CategoryEntity;
    orderItems: OrderItemEntity[];
    cartItems: CartItemEntity[];
}
