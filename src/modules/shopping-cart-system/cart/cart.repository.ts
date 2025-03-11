import { DataSource, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { CartEntity } from "./entity/cart.entity";
import { CreateCartDto } from "./dto/create.cart.dto";
import { CartItemEntity } from "../cart_item/entity/cart.item.entity";
import { UpdateCartDto } from "./dto/update.cart.dto";
import { CartItemsRepository } from "../cart_item/cart.items.repository";

@Injectable()
export class CartsRepository extends Repository<CartEntity> {
    constructor(private dataSource: DataSource, private cartItemsRepository: CartItemsRepository) {
        super(CartEntity, dataSource.createEntityManager());
    }

    async createCart(createCartDto: CreateCartDto): Promise<CartEntity> {
        const { user_id, cartItems } = createCartDto;

        const cart = this.create({
            user_id
        });

        await this.save(cart);

        if (cartItems) {
            for (const item of cartItems) {
                const cartItem = new CartItemEntity();
                cartItem.product_id = item.product_id;
                cartItem.quantity = item.quantity;
                cartItem.price = item.price;
                cartItem.cart_id = cart.id;
                await this.cartItemsRepository.save(cartItem);
            }
        }

        const cartDB = await this.findOne({ where: { id: cart.id }, relations: ['items'] });
        if (!cartDB) {
            throw new Error('Cart not found');
        }
        return cartDB;
    }


    async getCarts(): Promise<CartEntity[]> {
        return await this.find({ relations: ['user', 'items'] });
    }

    async updateCart(updateCartDto: UpdateCartDto): Promise<CartEntity> {
        const { id, cartItems } = updateCartDto;

        const cart = await this.findOne({ where: { id }, relations: ['items'] });
        if (!cart) {
            throw new Error('Cart not found');
        }

        if (cartItems) {
            await this.cartItemsRepository.delete({ cart_id: cart.id });

            for (const item of cartItems) {
                const cartItem = new CartItemEntity();
                cartItem.product_id = item.product_id;
                cartItem.quantity = item.quantity;
                cartItem.price = item.price;
                cartItem.cart_id = cart.id;

                await this.cartItemsRepository.save(cartItem);
            }
        }

        const updatedCart = await this.findOne({ where: { id: cart.id }, relations: ['items'] });
        if (!updatedCart) {
            throw new Error('Updated cart not found');
        }

        return updatedCart;
    }


}