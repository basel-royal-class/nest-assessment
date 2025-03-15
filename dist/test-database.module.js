"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDatabaseModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const dotenv = require("dotenv");
const product_entity_1 = require("./src/modules/products-catalog-system/products/entity/product.entity");
const users_entity_1 = require("./src/users/users.entity");
dotenv.config();
exports.TestDatabaseModule = typeorm_1.TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [product_entity_1.ProductEntity, users_entity_1.Users],
    autoLoadEntities: true,
    synchronize: process.env.DB_SYNCHRONIZE === 'true',
});
//# sourceMappingURL=test-database.module.js.map