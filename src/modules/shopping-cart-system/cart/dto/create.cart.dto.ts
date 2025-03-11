import { IsArray, IsInt } from 'class-validator';
import { CreateCartItemDto } from '../../cart_item/dto/create.cart.item.dto';

export class CreateCartDto {
    @IsInt()
    user_id: number;


    @IsArray()
    cartItems?: CreateCartItemDto[];
}
