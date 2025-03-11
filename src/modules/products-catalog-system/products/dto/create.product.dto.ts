import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsInt()
    price: number

    @IsNotEmpty()
    @IsInt()
    categoryId: number;
}