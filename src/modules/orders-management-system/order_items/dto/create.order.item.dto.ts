import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateOrderItemDto {
    @IsInt()
    @IsNotEmpty()
    order_id: number;

    @IsInt()
    @IsNotEmpty()
    product_id: number;

    @IsInt()
    quantity: number

    @IsNotEmpty()
    @IsInt()
    price: number;
}
