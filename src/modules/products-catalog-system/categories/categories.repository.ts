import { DataSource, Repository } from "typeorm";
import { CategoryEntity } from "./entity/category.entity";
import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "../products/dto/create.product.dto";
import { CreateCategoryDto } from "./dto/create.category.dto";
import { UpdateCategoryDto } from "./dto/update.category.dto";

@Injectable()
export class CategoriesRepository extends Repository<CategoryEntity> {

    constructor(private dataSource: DataSource) {
        super(CategoryEntity, dataSource.createEntityManager());
    }

    async createCategory(categoryDto: CreateCategoryDto): Promise<CategoryEntity> {
        const { name } = categoryDto;
        const categoryDB = await this.findOne({ where: { name: name } });
        if (categoryDB) {
            throw new Error('Category exists with same name');
        }
        const category = this.create({ name });
        return await this.save(category);
    }

    async updateCategory(updateCategoryDto: UpdateCategoryDto): Promise<{} | CategoryEntity> {
        const { name, id } = updateCategoryDto;
        const category = await this.findOne({ where: { id: id } });
        if (!category) {
            return { message: "Category not found!" };
        }
        if (name) category.name = name;
        return await this.save(category);
    }

    async getCategories(): Promise<CategoryEntity[]> {
        const categories = this.find();
        return categories;
    }
}