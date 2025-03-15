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
exports.ProductEntity = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("../../categories/entity/category.entity");
const order_item_entity_1 = require("../../../orders-management-system/order_items/entity/order.item.entity");
const cart_item_entity_1 = require("../../../shopping-cart-system/cart_item/entity/cart.item.entity");
let ProductEntity = class ProductEntity {
    id;
    name;
    description;
    price;
    categoryId;
    created_at;
    category;
    orderItems;
    cartItems;
};
exports.ProductEntity = ProductEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ProductEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity, (category) => category.products, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'categoryId' }),
    __metadata("design:type", category_entity_1.CategoryEntity)
], ProductEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_item_entity_1.OrderItemEntity, (orderItem) => orderItem.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "orderItems", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_item_entity_1.CartItemEntity, (cartItem) => cartItem.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "cartItems", void 0);
exports.ProductEntity = ProductEntity = __decorate([
    (0, typeorm_1.Entity)('products')
], ProductEntity);
//# sourceMappingURL=product.entity.js.map