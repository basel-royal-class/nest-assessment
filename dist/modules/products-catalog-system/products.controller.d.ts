import { ProductsService } from './products.service';
import { ProductEntity } from './entity/product.entity';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { CategoryDto } from './dto/create.category.dto';
import { CategoryEntity } from './entity/category.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    createProduct(createProductDto: CreateProductDto): Promise<{} | ProductEntity>;
    createCategory(categoryDto: CategoryDto): Promise<CategoryEntity>;
    getProducts(): Promise<ProductEntity[]>;
    updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<ProductEntity>;
    deleteProduct(id: number): Promise<void>;
}
