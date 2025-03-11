import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItemEntity } from './entity/cart.item.entity';
import { CartItemsController } from './cart.items.controller';
import { CartItemsService } from './cart.items.service';
import { CartItemsRepository } from './cart.items.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([CartItemEntity]),
    ],
    controllers: [CartItemsController],
    providers: [CartItemsService, CartItemsRepository]
})

export class CartItemsModule { }
