import { CreateCategoryDto } from './dto/create.category.dto';
import { CategoryEntity } from './entity/category.entity';
import { CategoriesRepository } from './categories.repository';
import { UpdateCategoryDto } from './dto/update.category.dto';
export declare class CategoriesService {
    private readonly productsRepository;
    constructor(productsRepository: CategoriesRepository);
    createCategory(categoryDto: CreateCategoryDto): Promise<CategoryEntity>;
    updateCategory(updateCategoryDto: UpdateCategoryDto): Promise<{} | CategoryEntity>;
    getCategories(): Promise<CategoryEntity[]>;
}
