import { DummyProductEntity } from '../dymmy-product';
import { DummyProductControllerService } from './dummy_product_controller.service';
export declare class DummyProductController {
    private readonly productsService;
    constructor(productsService: DummyProductControllerService);
    getProducts(cursor?: string, limit?: number): Promise<{
        data: DummyProductEntity[];
        nextCursor: string | null;
        limit: number;
        total: number;
        cTotal: number;
    }>;
}
