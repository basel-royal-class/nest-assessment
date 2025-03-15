import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create.order.dto';
import { OrderEntity } from './entity/order.entity';
import { UpdateOrderDto } from './dto/update.order.dto';
export declare class OrdersService {
    private readonly ordersRepository;
    constructor(ordersRepository: OrdersRepository);
    createOrder(createOrderDto: CreateOrderDto): Promise<OrderEntity>;
    getOrders(): Promise<OrderEntity[]>;
    updateOrder(updateOrderDto: UpdateOrderDto): Promise<OrderEntity>;
}
