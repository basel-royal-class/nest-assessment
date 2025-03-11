import { DataSource, Repository } from 'typeorm';
import { ProductEntity } from './entity/product.entity';
import { CategoryEntity } from './entity/category.entity';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { CategoryDto } from './dto/create.category.dto';
export declare class ProductsRepository extends Repository<ProductEntity> {
    private dataSource;
    private categoryRepository;
    constructor(dataSource: DataSource);
    createProduct(createProductDto: CreateProductDto): Promise<{} | ProductEntity>;
    createCategory(categoryDto: CategoryDto): Promise<CategoryEntity>;
    getProducts(): Promise<ProductEntity[]>;
    updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<ProductEntity>;
    deleteProduct(id: number): Promise<void>;
}
