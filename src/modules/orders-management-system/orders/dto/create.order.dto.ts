import { IsArray, IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { CreateOrderItemDto } from '../../order_items/dto/create.order.item.dto';

export class CreateOrderDto {
    @IsInt()
    @IsNotEmpty()
    user_id: number;

    @IsInt()
    @IsNotEmpty()
    total_amount: number;

    @IsString()
    status: string

    @IsArray()
    orderItems?: CreateOrderItemDto[];
}
