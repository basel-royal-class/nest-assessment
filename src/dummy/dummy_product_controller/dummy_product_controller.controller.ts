import { Controller, Get, Query, Res } from '@nestjs/common';
import { DummyProductControllerService } from './dummy_product_controller.service';
import { Response } from 'express'; // ✅ Import Express Response

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


    @Get('stream')
    streamProducts(@Res() res: Response) {
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        // Simulate product updates every 5 seconds
        setInterval(() => {
            const productUpdate = {
                id: Math.floor(Math.random() * 1000),
                name: `Product ${Math.floor(Math.random() * 100)}`,
                category: `Category ${Math.floor(Math.random() * 10)}`,
                timestamp: new Date().toISOString(),
            };

            // Send data to the client
            res.write(`data: ${JSON.stringify(productUpdate)}\n\n`);
        }, 5000);
    }
}
