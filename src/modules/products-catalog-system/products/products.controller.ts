import { Controller, Post, Body, Patch, Param, Delete, UseGuards, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductEntity } from './entity/product.entity';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { JwtAuthGuard } from '../../../auth/auth.guard';

@Controller('products')
@UseGuards(new JwtAuthGuard('jwt'))
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    // Create Product
    @Post()
    async createProduct(@Body() createProductDto: CreateProductDto): Promise<ProductEntity> {
        return this.productsService.createProduct(createProductDto);
    }

    // Get Products
    @Get()
    async getProducts(
    ): Promise<ProductEntity[]> {
        return this.productsService.getProducts();
    }

    @Patch()
    async updateProduct(
        @Body() updateProductDto: UpdateProductDto, // Get the update data from the request body
    ): Promise<ProductEntity> {
        return this.productsService.updateProduct(updateProductDto);
    }

    // Delete Product
    @Delete(':id')
    async deleteProduct(@Param('id') id: number): Promise<void> {
        return this.productsService.deleteProduct(id);
    }
}
