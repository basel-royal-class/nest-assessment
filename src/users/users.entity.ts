import { OrderEntity } from 'src/modules/orders-management-system/orders/entity/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => OrderEntity, (order) => order.user)
  orders: OrderEntity[];

}