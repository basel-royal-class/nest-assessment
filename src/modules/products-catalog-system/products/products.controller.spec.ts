import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from '../../../auth/auth.guard';
import { ProductEntity } from './entity/product.entity';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { CategoryEntity } from '../categories/entity/category.entity';
import { TestDatabaseModule } from '../../../../test-database.module';

describe('ProductsController', () => {
    let productsController: ProductsController;
    let productsService: ProductsService;

    const mockProductService = {
        createProduct: jest.fn(),
        getProducts: jest.fn(),
        updateProduct: jest.fn(),
        deleteProduct: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProductsController],
            providers: [
                {
                    provide: ProductsService,
                    useValue: mockProductService,
                },
            ],
            imports: [TestDatabaseModule]
        })
            .overrideGuard(JwtAuthGuard)
            .useValue({ canActivate: jest.fn(() => true) }) // Mock JwtAuthGuard to always return true
            .compile();

        productsController = module.get<ProductsController>(ProductsController);
        productsService = module.get<ProductsService>(ProductsService);
    });

    it('should be defined', () => {
        expect(productsController).toBeDefined();
    });

    describe('createProduct', () => {
        it('should call createProduct and return a product', async () => {
            const createProductDto: CreateProductDto = {
                name: 'Test Product',
                description: 'Test Description',
                price: 100,
                categoryId: 1
            };
            const mockCategory: CategoryEntity = {
                id: 1,
                name: 'Test Category',
                products: [], // If there are no relations, keep it an empty array
            };
            const result: ProductEntity = {
                id: 1,
                ...createProductDto,
                categoryId: 1,
                created_at: new Date(),
                category: mockCategory,
                orderItems: [],
                cartItems: [],
            };

            mockProductService.createProduct.mockResolvedValue(result);

            expect(await productsController.createProduct(createProductDto)).toEqual(result);
            expect(mockProductService.createProduct).toHaveBeenCalledWith(createProductDto);
        });
    });

    describe('getProducts', () => {
        it('should call getProducts and return an array of products', async () => {
            const mockCategory: CategoryEntity = {
                id: 1,
                name: 'Test Category',
                products: [], // If there are no relations, keep it an empty array
            };
            const product: ProductEntity = {
                id: 1,
                name: 'Test Product',
                description: 'Test Description',
                price: 100,
                categoryId: 1,
                created_at: new Date(),
                category: mockCategory,
                orderItems: [],
                cartItems: [],
            };
            const result: ProductEntity[] = [
                product,
                product
            ];

            mockProductService.getProducts.mockResolvedValue(result);

            expect(await productsController.getProducts()).toEqual(result);
            expect(mockProductService.getProducts).toHaveBeenCalled();
        });
    });

    describe('updateProduct', () => {
        it('should call updateProduct and return an updated product', async () => {
            const updateProductDto: UpdateProductDto = { id: 1, name: 'Updated Product', description: 'Updated Description', price: 120 };
            const mockCategory: CategoryEntity = {
                id: 1,
                name: 'Test Category',
                products: [], // If there are no relations, keep it an empty array
            };
            const result: ProductEntity = {
                id: 1,
                name: 'Test Product',
                description: 'Test Description',
                price: 100,
                categoryId: 1,
                created_at: new Date(),
                category: mockCategory,
                orderItems: [],
                cartItems: [],
            };
            mockProductService.updateProduct.mockResolvedValue(result);

            expect(await productsController.updateProduct(updateProductDto)).toEqual(result);
            expect(mockProductService.updateProduct).toHaveBeenCalledWith(updateProductDto);
        });
    });

    describe('deleteProduct', () => {
        it('should call deleteProduct and return void', async () => {
            const id = 1;

            mockProductService.deleteProduct.mockResolvedValue(undefined);

            await productsController.deleteProduct(id);

            expect(mockProductService.deleteProduct).toHaveBeenCalledWith(id);
        });
    });
});
