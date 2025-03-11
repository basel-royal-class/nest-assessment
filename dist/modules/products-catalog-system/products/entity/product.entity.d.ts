import { CategoryEntity } from '../../categories/entity/category.entity';
import { OrderItemEntity } from 'src/modules/orders-management-system/order_items/entity/order.item.entity';
import { CartItemEntity } from 'src/modules/shopping-cart-system/cart_item/entity/cart.item.entity';
export declare class ProductEntity {
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    category: CategoryEntity;
    orderItems: OrderItemEntity[];
    cartItems: CartItemEntity[];
}
