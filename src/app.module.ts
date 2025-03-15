import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './modules/products-catalog-system/products/products.module';
import { CategoriesModule } from './modules/products-catalog-system/categories/categories.module';
import { OrdersModule } from './modules/orders-management-system/orders/orders.module';
import { OrderItemsModule } from './modules/orders-management-system/order_items/order.items.module';
import { CartsModule } from './modules/shopping-cart-system/cart/carts.module';
import { DummyProductModuleModule } from './dummy/dummy_product_module/dummy_product_module.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Inject Global Config file
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true, // Add all entities automatically
      synchronize: process.env.DB_SYNCHRONIZE === 'true', // Auto sync DB schema (disable in production)
    }),
    UsersModule,
    AuthModule,
    ProductsModule,
    CategoriesModule,
    OrderItemsModule,
    OrdersModule,
    CartsModule,
    OrderItemsModule,
    DummyProductModuleModule
  ],
})
export class AppModule { }
