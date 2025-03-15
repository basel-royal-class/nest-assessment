import { CreateOrderDto } from './dto/create.order.dto';
import { OrderEntity } from './entity/order.entity';
import { OrdersService } from './orders.service';
import { UpdateOrderDto } from './dto/update.order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    createOrder(createOrderDto: CreateOrderDto): Promise<OrderEntity>;
    getOrders(): Promise<OrderEntity[]>;
    updateOrder(updateOrderDto: UpdateOrderDto): Promise<OrderEntity>;
}
