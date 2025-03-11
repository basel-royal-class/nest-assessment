import { Users } from 'src/users/users.entity';
import { OrderItemEntity } from '../../order_items/entity/order.item.entity';
export declare class OrderEntity {
    id: number;
    user_id: number;
    status: string;
    total_amount: number;
    created_at: Date;
    user: Users;
    items: OrderItemEntity[];
}
