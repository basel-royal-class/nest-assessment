"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cart_entity_1 = require("./entity/cart.entity");
const cart_item_entity_1 = require("../cart_item/entity/cart.item.entity");
const carts_controller_1 = require("./carts.controller");
const carts_service_1 = require("./carts.service");
const cart_repository_1 = require("./cart.repository");
const cart_items_repository_1 = require("../cart_item/cart.items.repository");
let CartsModule = class CartsModule {
};
exports.CartsModule = CartsModule;
exports.CartsModule = CartsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([cart_entity_1.CartEntity, cart_item_entity_1.CartItemEntity]),
        ],
        controllers: [carts_controller_1.CartsController],
        providers: [carts_service_1.CartsService, cart_repository_1.CartsRepository, cart_items_repository_1.CartItemsRepository]
    })
], CartsModule);
//# sourceMappingURL=carts.module.js.map