import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { ProductEntity } from './src/modules/products-catalog-system/products/entity/product.entity';
import { Users } from './src/users/users.entity';

dotenv.config();

export const TestDatabaseModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [ProductEntity, Users],
  autoLoadEntities: true, // Add all entities automatically
  synchronize: process.env.DB_SYNCHRONIZE === 'true', // Auto sync DB schema (disable in production)
});
