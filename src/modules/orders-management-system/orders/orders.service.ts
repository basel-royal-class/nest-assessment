import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create.order.dto';
import { OrderEntity } from './entity/order.entity';
import { Users } from 'src/users/users.entity';

@Injectable()
export class OrdersService {
    constructor(private readonly ordersRepository: OrdersRepository) { }

    // Create Order
    async createOrder(createOrderDto: CreateOrderDto): Promise<OrderEntity> {
        return this.ordersRepository.createOrder(createOrderDto);
    }
}
