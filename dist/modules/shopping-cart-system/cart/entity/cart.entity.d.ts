import { Users } from 'src/users/users.entity';
import { CartItemEntity } from '../../cart_item/entity/cart.item.entity';
export declare class CartEntity {
    id: number;
    user_id: number;
    user: Users;
    items: CartItemEntity[];
}
