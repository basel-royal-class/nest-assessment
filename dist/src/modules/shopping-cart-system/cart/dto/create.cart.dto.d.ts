import { CreateCartItemDto } from '../../cart_item/dto/create.cart.item.dto';
export declare class CreateCartDto {
    user_id: number;
    cartItems?: CreateCartItemDto[];
}
