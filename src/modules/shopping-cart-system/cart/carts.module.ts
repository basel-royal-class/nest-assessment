import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './entity/cart.entity';
import { CartItemEntity } from '../cart_item/entity/cart.item.entity';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';
import { CartsRepository } from './cart.repository';
import { CartItemsRepository } from '../cart_item/cart.items.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CartEntity, CartItemEntity]),
  ],
  controllers: [CartsController],
  providers: [CartsService, CartsRepository, CartItemsRepository]
})

export class CartsModule { }
