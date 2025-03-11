import { Body, Controller, Get, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth-guard';
import { CreateOrderDto } from './dto/create.order.dto';
import { OrderEntity } from './entity/order.entity';
import { OrdersService } from './orders.service';
import { GetUser } from 'src/decorators/user.decorator';
import { Users } from 'src/users/users.entity';
import { UpdateOrderDto } from './dto/update.order.dto';

@Controller('orders')
@UseGuards(new JwtAuthGuard('jwt'))
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) { }

    @Post()
    async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<OrderEntity> {
        return this.ordersService.createOrder(createOrderDto);
    }


    @Get()
    async getOrders(): Promise<OrderEntity[]> {
        return this.ordersService.getOrders();
    }


    @Patch()
    async updateOrder(@Body() updateOrderDto: UpdateOrderDto): Promise<OrderEntity> {
        return this.ordersService.updateOrder(updateOrderDto);
    }
}
