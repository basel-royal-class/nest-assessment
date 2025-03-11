import { DataSource, Repository } from "typeorm";
import { OrderEntity } from "./entity/order.entity";
import { Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create.order.dto";
import { OrderItemEntity } from "../order_items/entity/order.item.entity";
import { OrderItemsRepository } from "../order_items/order.items.repository";

@Injectable()
export class OrdersRepository extends Repository<OrderEntity> {
    constructor(private dataSource: DataSource, private orderItemsRepositoy: OrderItemsRepository) {
        super(OrderEntity, dataSource.createEntityManager());
    }

    async createOrder(createOrderDto: CreateOrderDto): Promise<OrderEntity> {
        const { total_amount, status, orderItems, user_id } = createOrderDto;

        const order = this.create({
            user_id,
            total_amount,
            status,
        });

        await this.save(order);

        if (orderItems) {
            for (const item of orderItems) {
                const orderItem = new OrderItemEntity();
                orderItem.product_id = item.product_id;
                orderItem.quantity = item.quantity;
                orderItem.price = item.price;
                orderItem.order_id = order.id; // Associate order items with the order

                // Save the order item
                await this.orderItemsRepositoy.save(orderItem);
            }
        }

        const orderDB = await this.findOne({ where: { id: order.id }, relations: ['items'] });
        if (!orderDB) {
            // Handle the case when no order is found
            throw new Error('Order not found');
        }
        return orderDB;
    }
}