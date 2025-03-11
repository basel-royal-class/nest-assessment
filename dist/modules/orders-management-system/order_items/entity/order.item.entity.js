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
exports.OrderItemEntity = void 0;
const typeorm_1 = require("typeorm");
const order_entity_1 = require("../../orders/entity/order.entity");
const product_entity_1 = require("../../../products-catalog-system/products/entity/product.entity");
let OrderItemEntity = class OrderItemEntity {
    id;
    quantity;
    price;
    product_id;
    order_id;
    order;
    product;
};
exports.OrderItemEntity = OrderItemEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderItemEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderItemEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderItemEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderItemEntity.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderItemEntity.prototype, "order_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.OrderEntity, (order) => order.items, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'order_id' }),
    __metadata("design:type", order_entity_1.OrderEntity)
], OrderItemEntity.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.ProductEntity, (product) => product.orderItems, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", product_entity_1.ProductEntity)
], OrderItemEntity.prototype, "product", void 0);
exports.OrderItemEntity = OrderItemEntity = __decorate([
    (0, typeorm_1.Entity)('order_item')
], OrderItemEntity);
//# sourceMappingURL=order.item.entity.js.map