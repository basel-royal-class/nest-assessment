import { Controller, Post, Body, Patch, Param, Delete, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth-guard';
import { CreateCategoryDto } from '../categories/dto/create.category.dto';
import { CategoryEntity } from '../categories/entity/category.entity';
import { CategoriesService } from './categories.service';
import { UpdateCategoryDto } from './dto/update.category.dto';

@Controller('categories')
@UseGuards(new JwtAuthGuard('jwt'))
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) { }

    // Create Category
    @Post()
    async createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<{} | CategoryEntity> {
        return this.categoriesService.createCategory(createCategoryDto);
    }

    // Get Categories
    @Get()
    async getCategories(
    ): Promise<CategoryEntity[]> {
        return this.categoriesService.getCategories();
    }

    @Patch()
    async updateCategory(
        @Body() updateCategoryDto: UpdateCategoryDto, // Get the update data from the request body
    ): Promise<CategoryEntity> {
        return this.categoriesService.updateCategory(updateCategoryDto);
    }


}
