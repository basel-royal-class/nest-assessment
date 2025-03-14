import { DataSource, Repository } from "typeorm";
import { OrderEntity } from "./entity/order.entity";
import { CreateOrderDto } from "./dto/create.order.dto";
import { OrderItemsRepository } from "../order_items/order.items.repository";
import { UpdateOrderDto } from "./dto/update.order.dto";
export declare class OrdersRepository extends Repository<OrderEntity> {
    private dataSource;
    private orderItemsRepositoy;
    constructor(dataSource: DataSource, orderItemsRepositoy: OrderItemsRepository);
    createOrder(createOrderDto: CreateOrderDto): Promise<OrderEntity>;
    getOrders(): Promise<OrderEntity[]>;
    updateOrder(updateOrderDto: UpdateOrderDto): Promise<OrderEntity>;
}
