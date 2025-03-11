import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entity/order.entity';
import { OrdersRepository } from './orders.repository';
import { OrderItemEntity } from '../order_items/entity/order.item.entity';
import { OrderItemsRepository } from '../order_items/order.items.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity, OrderItemEntity]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository, OrderItemsRepository]
})

export class OrdersModule { }
