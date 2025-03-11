import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsRepository } from './products.repository';
import { ProductEntity } from './entity/product.entity';
import { CategoryEntity } from '../categories/entity/category.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductEntity, CategoryEntity]),
    ],
    controllers: [ProductsController],
    providers: [ProductsService, ProductsRepository],
})
export class ProductsModule { }
