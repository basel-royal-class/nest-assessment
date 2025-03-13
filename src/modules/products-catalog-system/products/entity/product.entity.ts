import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from '../../categories/entity/category.entity';
import { OrderItemEntity } from '../../../orders-management-system/order_items/entity/order.item.entity';
import { CartItemEntity } from '../../../shopping-cart-system/cart_item/entity/cart.item.entity';


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

    @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.product)
    orderItems: OrderItemEntity[];

    @OneToMany(() => CartItemEntity, (cartItem) => cartItem.product)
    cartItems: CartItemEntity[];

}
