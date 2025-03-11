import { CategoryEntity } from './category.entity';
export declare class ProductEntity {
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    category: CategoryEntity;
}
