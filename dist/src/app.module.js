"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const products_module_1 = require("./modules/products-catalog-system/products/products.module");
const categories_module_1 = require("./modules/products-catalog-system/categories/categories.module");
const orders_module_1 = require("./modules/orders-management-system/orders/orders.module");
const order_items_module_1 = require("./modules/orders-management-system/order_items/order.items.module");
const carts_module_1 = require("./modules/shopping-cart-system/cart/carts.module");
const dummy_product_module_module_1 = require("./dummy/dummy_product_module/dummy_product_module.module");
const upload_module_1 = require("./modules/upload-manager/upload.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT || '3306'),
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                autoLoadEntities: true,
                synchronize: process.env.DB_SYNCHRONIZE === 'true',
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            products_module_1.ProductsModule,
            categories_module_1.CategoriesModule,
            order_items_module_1.OrderItemsModule,
            orders_module_1.OrdersModule,
            carts_module_1.CartsModule,
            order_items_module_1.OrderItemsModule,
            dummy_product_module_module_1.DummyProductModuleModule,
            upload_module_1.UploadModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map