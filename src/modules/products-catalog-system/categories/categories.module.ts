import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entity/category.entity';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { CategoriesRepository } from './categories.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([CategoryEntity]),
    ],
    controllers: [CategoriesController], // Register the controller
    providers: [CategoriesService, CategoriesRepository], // Register the service and repository
})
export class CategoriesModule { }
