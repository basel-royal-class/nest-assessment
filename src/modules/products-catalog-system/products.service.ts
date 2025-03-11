import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { ProductEntity } from './entity/product.entity';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { CategoryDto } from './dto/create.category.dto';
import { CategoryEntity } from './entity/category.entity';

@Injectable()
export class ProductsService {
    constructor(private readonly productsRepository: ProductsRepository) { }

    // Create Product
    async createProduct(createProductDto: CreateProductDto): Promise<{} | ProductEntity> {
        return this.productsRepository.createProduct(createProductDto);
    }

    // Create Category
    async createCategory(categoryDto: CategoryDto): Promise<CategoryEntity> {
        return this.productsRepository.createCategory(categoryDto);
    }

    // Update Product
    async getProducts(): Promise<ProductEntity[]> {
        return this.productsRepository.getProducts();
    }

    // Update Product
    async updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<ProductEntity> {
        return this.productsRepository.updateProduct(id, updateProductDto);
    }


    // Delete Product
    async deleteProduct(id: number): Promise<void> {
        return this.productsRepository.deleteProduct(id);
    }
}
