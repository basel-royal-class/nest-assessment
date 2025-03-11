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
exports.CartItemEntity = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("../../../products-catalog-system/products/entity/product.entity");
const cart_entity_1 = require("../../cart/entity/cart.entity");
let CartItemEntity = class CartItemEntity {
    id;
    quantity;
    price;
    product_id;
    cart_id;
    cart;
    product;
};
exports.CartItemEntity = CartItemEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CartItemEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CartItemEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CartItemEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CartItemEntity.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CartItemEntity.prototype, "cart_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cart_entity_1.CartEntity, (cart) => cart.items, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'cart_id' }),
    __metadata("design:type", cart_entity_1.CartEntity)
], CartItemEntity.prototype, "cart", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.ProductEntity, (product) => product.cartItems, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", product_entity_1.ProductEntity)
], CartItemEntity.prototype, "product", void 0);
exports.CartItemEntity = CartItemEntity = __decorate([
    (0, typeorm_1.Entity)('cart_item')
], CartItemEntity);
//# sourceMappingURL=cart.item.entity.js.map