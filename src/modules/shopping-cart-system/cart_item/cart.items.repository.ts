import { DataSource, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { CartItemEntity } from "./entity/cart.item.entity";
import { CreateCartItemDto } from "./dto/create.cart.item.dto";

@Injectable()
export class CartItemsRepository extends Repository<CartItemEntity> {
    constructor(private dataSource: DataSource) {
        super(CartItemEntity, dataSource.createEntityManager());
    }

    async createOrder(createCartItemDto: CreateCartItemDto): Promise<CartItemEntity> {
        const { cart_id, product_id, quantity, price } = createCartItemDto;

        const cartItem = this.create({
            cart_id,
            product_id,
            quantity,
            price
        });

        const cartItemDB = await this.save(cartItem);

        return cartItemDB;
    }
}