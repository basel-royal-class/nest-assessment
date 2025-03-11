import { CartsRepository } from './cart.repository';
import { CreateCartDto } from './dto/create.cart.dto';
import { CartEntity } from './entity/cart.entity';
import { UpdateCartDto } from './dto/update.cart.dto';
export declare class CartsService {
    private readonly ordersRepository;
    constructor(ordersRepository: CartsRepository);
    createCart(createOrderDto: CreateCartDto): Promise<CartEntity>;
    getCarts(): Promise<CartEntity[]>;
    updateCart(updateOrderDto: UpdateCartDto): Promise<CartEntity>;
}
