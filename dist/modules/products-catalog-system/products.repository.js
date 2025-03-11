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
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./entity/product.entity");
const category_entity_1 = require("./entity/category.entity");
let ProductsRepository = class ProductsRepository extends typeorm_1.Repository {
    dataSource;
    categoryRepository;
    constructor(dataSource) {
        super(product_entity_1.ProductEntity, dataSource.createEntityManager());
        this.dataSource = dataSource;
        this.categoryRepository = dataSource.getRepository(category_entity_1.CategoryEntity);
    }
    async createProduct(createProductDto) {
        const { name, categoryId, description, price } = createProductDto;
        const category = await this.findOne({ where: { id: categoryId } });
        if (!category) {
            return { message: 'Category is not found with provided id' };
        }
        const product = this.create({
            name,
            description,
            price,
            categoryId,
        });
        return await this.save(product);
    }
    async createCategory(categoryDto) {
        const { name } = categoryDto;
        const categoryDB = await this.categoryRepository.findOne({ where: { name: name } });
        if (categoryDB) {
            throw new Error('Category exists with same name');
        }
        const category = this.categoryRepository.create({ name });
        return await this.categoryRepository.save(category);
    }
    async getProducts() {
        const products = this.find();
        return products;
    }
    async updateProduct(id, updateProductDto) {
        const { name, categoryId, description, price } = updateProductDto;
        const product = await this.findOne({ where: { id }, relations: ['category'] });
        if (!product) {
            throw new Error('Product not found');
        }
        if (name)
            product.name = name;
        if (description)
            product.description = description;
        if (price)
            product.price = price;
        if (categoryId) {
            const category = await this.categoryRepository.findOne({ where: { id: categoryId } });
            if (!category) {
                throw new Error('Category not found');
            }
            product.categoryId = categoryId;
        }
        return await this.save(product);
    }
    async deleteProduct(id) {
        const result = await this.delete(id);
        if (result.affected === 0) {
            throw new Error('Product not found');
        }
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map