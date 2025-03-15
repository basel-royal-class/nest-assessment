import { DummyProductControllerService } from './dummy_product_controller.service';
export declare class DummyProductController {
    private readonly productsService;
    constructor(productsService: DummyProductControllerService);
    getProducts(cursor?: string, limit?: number): Promise<{
        data: import("../../modules/products-catalog-system/products/entity/product.entity").ProductEntity[];
        nextCursor: Date | null;
        limit: number;
        total: number;
        cTotal: number;
    }>;
}
