import { Body, Controller, Get, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth-guard';
import { CreateCartDto } from './dto/create.cart.dto';
import { CartEntity } from './entity/cart.entity';
import { UpdateCartDto } from './dto/update.cart.dto';
import { CartsService } from './carts.service';

@Controller('carts')
@UseGuards(new JwtAuthGuard('jwt'))
export class CartsController {
    constructor(private readonly cartsService: CartsService) { }

    @Post()
    async createOrder(@Body() createOrderDto: CreateCartDto): Promise<CartEntity> {
        return this.cartsService.createCart(createOrderDto);
    }


    @Get()
    async getOrders(): Promise<CartEntity[]> {
        return this.cartsService.getCarts();
    }


    @Patch()
    async updateOrder(@Body() updateOrderDto: UpdateCartDto): Promise<CartEntity> {
        return this.cartsService.updateCart(updateOrderDto);
    }
}
