import { Module } from '@nestjs/common';
import { OrderItemsService } from './order.items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemEntity } from './entity/order.item.entity';
import { OrderItemsController } from './order.items.controller';
import { OrderItemsRepository } from './order.items.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([OrderItemEntity]),
  ],
  controllers: [OrderItemsController],
  providers: [OrderItemsService, OrderItemsRepository]
})
export class OrderItemsModule { }
