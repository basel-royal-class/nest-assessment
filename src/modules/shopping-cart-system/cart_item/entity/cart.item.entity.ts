import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from '../../../products-catalog-system/products/entity/product.entity';

import { CartEntity } from '../../cart/entity/cart.entity';

@Entity('cart_item')
export class CartItemEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @Column()
    product_id: number;

    @Column()
    cart_id: number;

    @ManyToOne(() => CartEntity, (cart) => cart.items, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'cart_id' })
    cart: CartEntity;

    @ManyToOne(() => ProductEntity, (product) => product.cartItems, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'product_id' })
    product: ProductEntity;
}
