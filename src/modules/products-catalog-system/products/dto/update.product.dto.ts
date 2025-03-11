import { IsInt } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create.product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsInt()
    id?: number;
}
