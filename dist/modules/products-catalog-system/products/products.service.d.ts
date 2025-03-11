import { ProductsRepository } from './products.repository';
import { ProductEntity } from './entity/product.entity';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: ProductsRepository);
    createProduct(createProductDto: CreateProductDto): Promise<ProductEntity>;
    getProducts(): Promise<ProductEntity[]>;
    updateProduct(updateProductDto: UpdateProductDto): Promise<ProductEntity>;
    deleteProduct(id: number): Promise<void>;
}
