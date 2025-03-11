import { DataSource, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { OrderItemEntity } from "./entity/order.item.entity";
import { CreateOrderItemDto } from "./dto/create.order.item.dto";

@Injectable()
export class OrderItemsRepository extends Repository<OrderItemEntity> {
    constructor(private dataSource: DataSource) {
        super(OrderItemEntity, dataSource.createEntityManager());
    }

    async createOrder(createOrderItemDto: CreateOrderItemDto): Promise<OrderItemEntity> {
        const { order_id, product_id, quantity, price } = createOrderItemDto;

        const orderItem = this.create({
            order_id,
            product_id,
            quantity,
            price
        });

        const orderItemDB = await this.save(orderItem);


        return orderItemDB;
    }
}