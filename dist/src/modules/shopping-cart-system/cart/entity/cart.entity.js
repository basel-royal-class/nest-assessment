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
exports.CartEntity = void 0;
const users_entity_1 = require("../../../../users/users.entity");
const typeorm_1 = require("typeorm");
const cart_item_entity_1 = require("../../cart_item/entity/cart.item.entity");
let CartEntity = class CartEntity {
    id;
    user_id;
    user;
    items;
};
exports.CartEntity = CartEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CartEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CartEntity.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.Users, (user) => user.id, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", users_entity_1.Users)
], CartEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_item_entity_1.CartItemEntity, (cartItem) => cartItem.cart),
    __metadata("design:type", Array)
], CartEntity.prototype, "items", void 0);
exports.CartEntity = CartEntity = __decorate([
    (0, typeorm_1.Entity)('cart')
], CartEntity);
//# sourceMappingURL=cart.entity.js.map