import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from 'src/users/users.entity';
import { OrderItemEntity } from '../../order_items/entity/order.item.entity';

@Entity('orders')
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number; // Foreign key column

    @Column()
    status: string;

    @Column()
    total_amount: number;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @ManyToOne(() => Users, (user) => user.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: Users;

    @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order)
    items: OrderItemEntity[];

}
