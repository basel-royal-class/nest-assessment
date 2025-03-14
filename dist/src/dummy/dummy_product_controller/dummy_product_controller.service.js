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
exports.DummyProductControllerService = void 0;
const common_1 = require("@nestjs/common");
const product_entity_1 = require("../../modules/products-catalog-system/products/entity/product.entity");
const typeorm_1 = require("typeorm");
let DummyProductControllerService = class DummyProductControllerService extends typeorm_1.Repository {
    dataSource;
    constructor(dataSource) {
        super(product_entity_1.ProductEntity, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async getProducts(cursor, limit = 10) {
        const query = this.createQueryBuilder("products")
            .orderBy("products.created_at", "DESC")
            .take(limit);
        if (cursor) {
            query.where("products.created_at >= :cursor", { cursor });
        }
        const products = await query.getMany();
        const total = await this.count();
        return {
            data: products,
            nextCursor: products.length ? products[products.length - 1].created_at : null,
            limit,
            total: total,
            cTotal: total / limit
        };
    }
};
exports.DummyProductControllerService = DummyProductControllerService;
exports.DummyProductControllerService = DummyProductControllerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], DummyProductControllerService);
//# sourceMappingURL=dummy_product_controller.service.js.map