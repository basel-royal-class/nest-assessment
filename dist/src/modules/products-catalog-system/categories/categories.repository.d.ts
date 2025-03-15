import { DataSource, Repository } from "typeorm";
import { CategoryEntity } from "./entity/category.entity";
import { CreateCategoryDto } from "./dto/create.category.dto";
import { UpdateCategoryDto } from "./dto/update.category.dto";
export declare class CategoriesRepository extends Repository<CategoryEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
    createCategory(categoryDto: CreateCategoryDto): Promise<CategoryEntity>;
    updateCategory(updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity>;
    getCategories(): Promise<CategoryEntity[]>;
}
