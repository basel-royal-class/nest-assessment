import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create.order.dto';
import { OrderEntity } from './entity/order.entity';
import { UpdateOrderDto } from './dto/update.order.dto';

@Injectable()
export class OrdersService {
    constructor(private readonly ordersRepository: OrdersRepository) { }

    // Create Order
    async createOrder(createOrderDto: CreateOrderDto): Promise<OrderEntity> {
        return this.ordersRepository.createOrder(createOrderDto);
    }

    async getOrders(): Promise<OrderEntity[]> {
        return this.ordersRepository.getOrders();
    }

    async updateOrder(updateOrderDto: UpdateOrderDto): Promise<OrderEntity> {
        return this.ordersRepository.updateOrder(updateOrderDto);
    }

}
