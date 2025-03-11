import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity('products')
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    categoryId: number; // Foreign key column

    @ManyToOne(() => CategoryEntity, (category) => category.products, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'categoryId' }) // Specifies the column to use as the foreign key
    category: CategoryEntity; // Optional: this gives you access to the full Category object (populated automatically)
}
