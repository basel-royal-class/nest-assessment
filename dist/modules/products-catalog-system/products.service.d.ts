import { ProductsRepository } from './products.repository';
import { ProductEntity } from './entity/product.entity';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { CategoryDto } from './dto/create.category.dto';
import { CategoryEntity } from './entity/category.entity';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: ProductsRepository);
    createProduct(createProductDto: CreateProductDto): Promise<{} | ProductEntity>;
    createCategory(categoryDto: CategoryDto): Promise<CategoryEntity>;
    getProducts(): Promise<ProductEntity[]>;
    updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<ProductEntity>;
    deleteProduct(id: number): Promise<void>;
}
