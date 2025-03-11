"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRepository = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./entity/category.entity");
const common_1 = require("@nestjs/common");
let CategoriesRepository = class CategoriesRepository extends typeorm_1.Repository {
    dataSource;
    constructor(dataSource) {
        super(category_entity_1.CategoryEntity, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async createCategory(categoryDto) {
        const { name } = categoryDto;
        const categoryDB = await this.findOne({ where: { name: name } });
        if (categoryDB) {
            throw new Error('Category exists with same name');
        }
        const category = this.create({ name });
        return await this.save(category);
    }
    async updateCategory(updateCategoryDto) {
        const { name, id } = updateCategoryDto;
        const category = await this.findOne({ where: { id: id } });
        if (!category) {
            return { message: "Category not found!" };
        }
        if (name)
            category.name = name;
        return await this.save(category);
    }
    async getCategories() {
        const categories = this.find();
        return categories;
    }
};
exports.CategoriesRepository = CategoriesRepository;
exports.CategoriesRepository = CategoriesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], CategoriesRepository);
//# sourceMappingURL=categories.repository.js.map