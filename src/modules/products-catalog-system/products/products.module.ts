import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsRepository } from './products.repository';
import { ProductEntity } from './entity/product.entity';
import { CategoryEntity } from '../categories/entity/category.entity';

@Module({
    imports: [
        // Import the TypeOrmModule to use the Product and Category entities.
        TypeOrmModule.forFeature([ProductEntity, CategoryEntity]),
    ],
    controllers: [ProductsController], // Register the controller
    providers: [ProductsService, ProductsRepository], // Register the service and repository
})
export class ProductsModule { }
