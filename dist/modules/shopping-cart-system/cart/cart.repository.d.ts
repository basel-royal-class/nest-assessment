import { DataSource, Repository } from "typeorm";
import { CartEntity } from "./entity/cart.entity";
import { CreateCartDto } from "./dto/create.cart.dto";
import { UpdateCartDto } from "./dto/update.cart.dto";
import { CartItemsRepository } from "../cart_item/cart.items.repository";
export declare class CartsRepository extends Repository<CartEntity> {
    private dataSource;
    private cartItemsRepository;
    constructor(dataSource: DataSource, cartItemsRepository: CartItemsRepository);
    createCart(createCartDto: CreateCartDto): Promise<CartEntity>;
    getCarts(): Promise<CartEntity[]>;
    updateCart(updateCartDto: UpdateCartDto): Promise<CartEntity>;
}
