import { DataSource, Repository } from "typeorm";
import { OrderItemEntity } from "./entity/order.item.entity";
import { CreateOrderItemDto } from "./dto/create.order.item.dto";
export declare class OrderItemsRepository extends Repository<OrderItemEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
    createOrder(createOrderItemDto: CreateOrderItemDto): Promise<OrderItemEntity>;
}
