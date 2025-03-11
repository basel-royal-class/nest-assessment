import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from '../../orders/entity/order.entity';
import { ProductEntity } from 'src/modules/products-catalog-system/products/entity/product.entity';

@Entity('order_item')
export class OrderItemEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @Column()
    product_id: number;

    @Column()
    order_id: number;

    @ManyToOne(() => OrderEntity, (order) => order.items, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'order_id' })
    order: OrderEntity;

    @ManyToOne(() => ProductEntity, (product) => product.orderItems, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'product_id' })
    product: ProductEntity;
}
