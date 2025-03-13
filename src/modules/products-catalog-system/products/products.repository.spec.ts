import { Test, TestingModule } from '@nestjs/testing';
import { DataSource } from 'typeorm';
import { ProductsRepository } from './products.repository';
import { CreateProductDto } from './dto/create.product.dto';

describe('ProductsRepository', () => {
    let repository: ProductsRepository;
    let dataSourceMock: Partial<DataSource>;

    beforeEach(async () => {

        dataSourceMock = {
            createEntityManager: jest.fn(),
            getRepository: jest.fn().mockReturnValue({
                findOne: jest.fn().mockResolvedValue(null),
                create: jest.fn().mockImplementation((data) => data),
                save: jest.fn().mockResolvedValue({ id: 1, name: 'Test Product' }),
            }),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ProductsRepository,
                { provide: DataSource, useValue: dataSourceMock },
            ],
        }).compile();

        repository = module.get<ProductsRepository>(ProductsRepository);
    });

    it('should create a new product', async () => {
        const data = { name: 'Product 01', description: 'Some Description for testing', price: 20, categoryId: 1 };
        repository.save = jest.fn().mockResolvedValue(data);
        const createProductDto: CreateProductDto = data;
        const result = await repository.createProduct(createProductDto);
        expect(repository.save).toHaveBeenCalledWith(createProductDto);
        expect(result).toEqual(data);
    });

    // it('should return average price for a product', async () => {
    //     repository.query = jest.fn().mockResolvedValue([{ avgRating: '4.5' }]);

    //     const result = await repository.getAveragePricesForProduct(1);

    //     expect(repository.query).toHaveBeenCalledWith(
    //         `SELECT AVG(price) as avgRating FROM products WHERE price >= 10`,
    //     );
    //     expect(result).toBe(4.5);
    // });

    // it('should return 0 if no rating is found', async () => {
    //     repository.query = jest.fn().mockResolvedValue([{}]); // No avgRating in response

    //     const result = await repository.getAverageRatingForCustomer(2);

    //     expect(result).toBe(0);
    // });
});
