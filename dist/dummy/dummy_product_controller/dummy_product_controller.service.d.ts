import { DummyProductEntity } from '../dymmy-product';
import { DataSource, Repository } from 'typeorm';
export declare class DummyProductControllerService extends Repository<DummyProductEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
    getProducts(cursor?: string, limit?: number): Promise<{
        data: DummyProductEntity[];
        nextCursor: string | null;
        limit: number;
        total: number;
        cTotal: number;
    }>;
}
