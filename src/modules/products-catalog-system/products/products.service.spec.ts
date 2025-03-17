import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { ProductsRepository } from './products.repository';
import { ProductEntity } from './entity/product.entity';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { CategoryEntity } from '../categories/entity/category.entity';

describe('ProductsService', () => {
    let productsService: ProductsService;
    let productsRepository: ProductsRepository;
    let module: TestingModule;

    beforeEach(async () => {
        module = await Test.createTestingModule({
            providers: [
                ProductsService,
                {
                    provide: ProductsRepository,
                    useValue: {
                        createProduct: jest.fn(),
                        getProducts: jest.fn(),
                        updateProduct: jest.fn(),
                        deleteProduct: jest.fn(),
                    },
                },
            ],
        }).compile();

        productsService = module.get<ProductsService>(ProductsService);
        productsRepository = module.get<ProductsRepository>(ProductsRepository);
    });

    afterEach(() => {
        jest.clearAllMocks(); // Clears all mocks after each test
    });

    afterAll(async () => {
        await module.close(); // Closes the NestJS testing module
    });

    it('should be defined', () => {
        expect(productsService).toBeDefined();
    });



    describe('getProducts', () => {
        it('should return all products', async () => {
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

            const products: ProductEntity[] = [
                product,
                product
            ];
            jest.spyOn(productsRepository, 'getProducts').mockResolvedValue(products);

            const result = await productsService.getProducts();
            expect(result).toEqual(products);
            expect(productsRepository.getProducts).toHaveBeenCalled();
        });
    });

    describe('createProduct', () => {
        it('should create a product', async () => {
            const createProductDto: CreateProductDto = { name: 'Product 01', description: 'Some Description for testing', price: 20, categoryId: 1 };
            // const createdProduct: ProductEntity = { id: 1, ...createProductDto };
            const mockCategory: CategoryEntity = {
                id: 1,
                name: 'Test Category',
                products: [], // If there are no relations, keep it an empty array
            };
            const createdProduct: ProductEntity = {
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
            jest.spyOn(productsRepository, 'createProduct').mockResolvedValue(createdProduct);
            const result = await productsService.createProduct(createProductDto);
            expect(result).toEqual(createdProduct);
            expect(productsRepository.createProduct).toHaveBeenCalledWith(createProductDto);
        });
    });

    describe('updateProduct', () => {
        it('should update a product', async () => {
            const updateProductDto: UpdateProductDto = { name: 'Product 01', description: 'Some Description for testing', price: 20, categoryId: 1 };
            const mockCategory: CategoryEntity = {
                id: 1,
                name: 'Test Category',
                products: [], // If there are no relations, keep it an empty array
            };
            const updatedProduct: ProductEntity = {
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

            jest.spyOn(productsRepository, 'updateProduct').mockResolvedValue(updatedProduct);

            const result = await productsService.updateProduct(updateProductDto);
            expect(result).toEqual(updatedProduct);
            expect(productsRepository.updateProduct).toHaveBeenCalledWith(updateProductDto);
        });
    });

    describe('deleteProduct', () => {
        it('should delete a product', async () => {
            const productId = 1;
            jest.spyOn(productsRepository, 'deleteProduct').mockResolvedValue(undefined);

            await expect(productsService.deleteProduct(productId)).resolves.toBeUndefined();
            expect(productsRepository.deleteProduct).toHaveBeenCalledWith(productId);
        });
    });
});