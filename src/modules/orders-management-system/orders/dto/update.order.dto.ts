import { PartialType } from '@nestjs/mapped-types';
import { IsInt } from 'class-validator';
import { CreateOrderDto } from './create.order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    @IsInt()
    id: number;
}
