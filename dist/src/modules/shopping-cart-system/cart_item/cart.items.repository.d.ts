import { DataSource, Repository } from "typeorm";
import { CartItemEntity } from "./entity/cart.item.entity";
import { CreateCartItemDto } from "./dto/create.cart.item.dto";
export declare class CartItemsRepository extends Repository<CartItemEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
    createOrder(createCartItemDto: CreateCartItemDto): Promise<CartItemEntity>;
}
