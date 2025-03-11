import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ProductEntity } from './entity/product.entity';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { CategoryEntity } from '../categories/entity/category.entity';

@Injectable()
export class ProductsRepository extends Repository<ProductEntity> {
    private categoryRepository: Repository<CategoryEntity>;

    constructor(private dataSource: DataSource) {
        super(ProductEntity, dataSource.createEntityManager());
        this.categoryRepository = dataSource.getRepository(CategoryEntity);
    }

    async createProduct(createProductDto: CreateProductDto): Promise<ProductEntity> {
        const { name, categoryId, description, price } = createProductDto;

        const category = await this.findOne({ where: { id: categoryId } });
        if (!category) {
            throw new Error('Category not found');
        }

        const product = this.create({
            name,
            description,
            price,
            categoryId,
        });

        return await this.save(product);
    }



    async getProducts(): Promise<ProductEntity[]> {
        const products = this.find();
        return products;
    }

    async updateProduct(updateProductDto: UpdateProductDto): Promise<ProductEntity> {
        const { name, categoryId, description, price, id } = updateProductDto;
        const product = await this.findOne({ where: { id }, relations: ['category'] });
        if (!product) {
            throw new Error('Product not found');
        }

        if (name) product.name = name;
        if (description) product.description = description;
        if (price) product.price = price;
        if (categoryId) {
            const category = await this.categoryRepository.findOne({ where: { id: categoryId } });
            if (!category) {
                throw new Error('Category not found');
            }
            product.categoryId = categoryId;
            // product.category = category;
        }

        return await this.save(product);
    }

    async deleteProduct(id: number): Promise<void> {
        const result = await this.delete(id);
        if (result.affected === 0) {
            throw new Error('Product not found');
        }
    }
}
