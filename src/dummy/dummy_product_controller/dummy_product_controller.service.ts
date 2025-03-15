import { Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/modules/products-catalog-system/products/entity/product.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class DummyProductControllerService extends Repository<ProductEntity> {
    constructor(private dataSource: DataSource) {
        super(ProductEntity, dataSource.createEntityManager());
    }

    async getProducts(cursor?: string, limit: number = 10) {
        const query = this.createQueryBuilder("products")
            .orderBy("products.created_at", "DESC")
            .take(limit);

        if (cursor) {
            query.where("products.created_at >= :cursor", { cursor });
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
