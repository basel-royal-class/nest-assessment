import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create.category.dto';
import { CategoryEntity } from './entity/category.entity';
import { CategoriesRepository } from './categories.repository';
import { UpdateCategoryDto } from './dto/update.category.dto';

@Injectable()
export class CategoriesService {
    constructor(private readonly productsRepository: CategoriesRepository) { }
    // Create Categry
    async createCategory(categoryDto: CreateCategoryDto): Promise<CategoryEntity> {
        return this.productsRepository.createCategory(categoryDto);
    }

    // Update Category
    async updateCategory(updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
        return this.productsRepository.updateCategory(updateCategoryDto);
    }

    // Get all categores
    async getCategories(): Promise<CategoryEntity[]> {
        return this.productsRepository.getCategories();
    }


}
