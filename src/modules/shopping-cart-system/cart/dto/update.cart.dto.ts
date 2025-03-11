import { PartialType } from '@nestjs/mapped-types';
import { IsInt } from 'class-validator';
import { CreateCartDto } from './create.cart.dto';

export class UpdateCartDto extends PartialType(CreateCartDto) {
    @IsInt()
    id: number;
}
