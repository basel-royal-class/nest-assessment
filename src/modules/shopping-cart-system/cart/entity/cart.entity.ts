import { Users } from '../../../../users/users.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CartItemEntity } from '../../cart_item/entity/cart.item.entity';

@Entity('cart')
export class CartEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;


    @ManyToOne(() => Users, (user) => user.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: Users;

    @OneToMany(() => CartItemEntity, (cartItem) => cartItem.cart)
    items: CartItemEntity[];
}