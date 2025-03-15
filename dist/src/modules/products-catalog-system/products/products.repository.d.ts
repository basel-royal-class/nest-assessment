import { DataSource, Repository } from 'typeorm';
import { ProductEntity } from './entity/product.entity';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
export declare class ProductsRepository extends Repository<ProductEntity> {
    private dataSource;
    private categoryRepository;
    constructor(dataSource: DataSource);
    createProduct(createProductDto: CreateProductDto): Promise<ProductEntity>;
    getProducts(): Promise<ProductEntity[]>;
    updateProduct(updateProductDto: UpdateProductDto): Promise<ProductEntity>;
    deleteProduct(id: number): Promise<void>;
}
