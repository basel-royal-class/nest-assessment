"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDatabaseModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const dotenv = require("dotenv");
dotenv.config();
exports.TestDatabaseModule = typeorm_1.TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: process.env.DB_SYNCHRONIZE === 'true',
});
//# sourceMappingURL=test-database.module.js.map