import { ProductEntity } from 'src/modules/products-catalog-system/products/entity/product.entity';
import { DataSource, Repository } from 'typeorm';
export declare class DummyProductControllerService extends Repository<ProductEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
    getProducts(cursor?: string, limit?: number): Promise<{
        data: ProductEntity[];
        nextCursor: Date | null;
        limit: number;
        total: number;
        cTotal: number;
    }>;
}
