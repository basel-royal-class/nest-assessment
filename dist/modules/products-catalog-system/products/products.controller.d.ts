import { ProductsService } from './products.service';
import { ProductEntity } from './entity/product.entity';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    createProduct(createProductDto: CreateProductDto): Promise<ProductEntity>;
    getProducts(): Promise<ProductEntity[]>;
    updateProduct(updateProductDto: UpdateProductDto): Promise<ProductEntity>;
    deleteProduct(id: number): Promise<void>;
}
