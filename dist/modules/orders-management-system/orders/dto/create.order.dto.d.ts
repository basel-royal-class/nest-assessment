import { CreateOrderItemDto } from '../../order_items/dto/create.order.item.dto';
export declare class CreateOrderDto {
    user_id: number;
    total_amount: number;
    status: string;
    orderItems?: CreateOrderItemDto[];
}
