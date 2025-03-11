import { CreateCategoryDto } from '../categories/dto/create.category.dto';
import { CategoryEntity } from '../categories/entity/category.entity';
import { CategoriesService } from './categories.service';
import { UpdateCategoryDto } from './dto/update.category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    createCategory(createCategoryDto: CreateCategoryDto): Promise<{} | CategoryEntity>;
    getCategories(): Promise<CategoryEntity[]>;
    updateCategory(updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity>;
}
