import { IsInt } from 'class-validator';

export class CreateCartItemDto {
    @IsInt()
    cart_id: number;

    @IsInt()
    product_id: number;

    @IsInt()
    quantity: number;

    @IsInt()
    price: number;
}
