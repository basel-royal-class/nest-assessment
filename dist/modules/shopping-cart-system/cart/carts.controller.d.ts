import { CreateCartDto } from './dto/create.cart.dto';
import { CartEntity } from './entity/cart.entity';
import { UpdateCartDto } from './dto/update.cart.dto';
import { CartsService } from './carts.service';
export declare class CartsController {
    private readonly cartsService;
    constructor(cartsService: CartsService);
    createOrder(createOrderDto: CreateCartDto): Promise<CartEntity>;
    getOrders(): Promise<CartEntity[]>;
    updateOrder(updateOrderDto: UpdateCartDto): Promise<CartEntity>;
}
