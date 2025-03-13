import { Controller, Get, Query } from '@nestjs/common';
import { DummyProductEntity } from '../dymmy-product';
import { DummyProductControllerService } from './dummy_product_controller.service';

@Controller('dummy-products')
export class DummyProductController {
    constructor(private readonly productsService: DummyProductControllerService) { }

    @Get()
    async getProducts(
        @Query('cursor') cursor?: string, // Optional cursor for pagination
        @Query('limit') limit = 10, // Default limit is 10
    ) {
        return this.productsService.getProducts(cursor, Number(limit));
    }
}
