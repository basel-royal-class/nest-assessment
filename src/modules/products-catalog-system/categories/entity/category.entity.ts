import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from '../../products/entity/product.entity';

@Entity('categories')
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // Relation with products (one category can have many products)
    @OneToMany(() => ProductEntity, (product) => product.category)
    products: ProductEntity[];
}