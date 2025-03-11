import { Injectable } from '@nestjs/common';
import { CartsRepository } from './cart.repository';
import { CreateCartDto } from './dto/create.cart.dto';
import { CartEntity } from './entity/cart.entity';
import { UpdateCartDto } from './dto/update.cart.dto';

@Injectable()
export class CartsService {
    constructor(private readonly ordersRepository: CartsRepository) { }

    async createCart(createOrderDto: CreateCartDto): Promise<CartEntity> {
        return this.ordersRepository.createCart(createOrderDto);
    }

    async getCarts(): Promise<CartEntity[]> {
        return this.ordersRepository.getCarts();
    }

    async updateCart(updateOrderDto: UpdateCartDto): Promise<CartEntity> {
        return this.ordersRepository.updateCart(updateOrderDto);
    }
}
