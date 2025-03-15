import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DummyProductController } from '../dummy_product_controller/dummy_product_controller.controller';
import { DummyProductControllerService } from '../dummy_product_controller/dummy_product_controller.service';
import { ProductEntity } from 'src/modules/products-catalog-system/products/entity/product.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductEntity]),
    ],
    controllers: [DummyProductController],
    providers: [DummyProductControllerService],
})
export class DummyProductModuleModule { }
