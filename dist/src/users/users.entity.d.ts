import { OrderEntity } from '../modules/orders-management-system/orders/entity/order.entity';
export declare class Users {
    id: number;
    name: string;
    email: string;
    password: string;
    orders: OrderEntity[];
}
