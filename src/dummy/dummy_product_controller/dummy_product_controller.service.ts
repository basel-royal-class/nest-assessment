import { Injectable } from '@nestjs/common';
import { DummyProductEntity } from '../dymmy-product';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class DummyProductControllerService extends Repository<DummyProductEntity> {
    constructor(private dataSource: DataSource) {
        super(DummyProductEntity, dataSource.createEntityManager());
    }
    async getProducts(cursor?: string, limit: number = 10) {
        const query = this.createQueryBuilder("product")
            .orderBy("product.created_at", "DESC")
            .take(limit);

        if (cursor) {
            query.where("product.created_at < :cursor", { cursor });
        }

        const products = await query.getMany();
        const total = await this.count();

        return {
            data: products,
            nextCursor: products.length ? products[products.length - 1].created_at : null,
            limit,
            total: total,
            cTotal: total / limit
        };
    }


    // async getProducts(page: number = 1, limit: number = 10): Promise<{}> {
    //     const skip = (page - 1) * limit; // Calculate the offset

    //     const [products, total] = await this.findAndCount({
    //         skip,
    //         take: limit,
    //         // order: { created_at: 'DESC' }, // Sort by newest first
    //     });

    //     return {
    //         data: products,
    //         total,
    //         page,
    //         limit,
    //         totalPages: Math.ceil(total / limit),
    //     };
    // }

}
