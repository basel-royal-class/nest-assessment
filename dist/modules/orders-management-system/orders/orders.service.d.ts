import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create.order.dto';
import { OrderEntity } from './entity/order.entity';
export declare class OrdersService {
    private readonly ordersRepository;
    constructor(ordersRepository: OrdersRepository);
    createOrder(createOrderDto: CreateOrderDto): Promise<OrderEntity>;
}
