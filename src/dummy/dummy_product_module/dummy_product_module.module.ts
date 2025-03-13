import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DummyProductEntity } from '../dymmy-product';
import { DummyProductController } from '../dummy_product_controller/dummy_product_controller.controller';
import { DummyProductControllerService } from '../dummy_product_controller/dummy_product_controller.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([DummyProductEntity]),
    ],
    controllers: [DummyProductController],
    providers: [DummyProductControllerService],
})
export class DummyProductModuleModule { }
