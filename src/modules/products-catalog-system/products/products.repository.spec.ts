import { Test, TestingModule } from '@nestjs/testing';
import { DataSource } from 'typeorm';
import { ProductsRepository } from './products.repository';
import { CreateProductDto } from './dto/create.product.dto';
import { TestDatabaseModule } from '../../../../test-database.module';

describe('ProductsRepository', () => {
    let repository: ProductsRepository;
    let dataSourceMock: Partial<DataSource>;

    beforeEach(async () => {
        dataSourceMock = {
            createEntityManager: jest.fn(),
            getRepository: jest.fn().mockReturnValue({
                findOne: jest.fn().mockResolvedValue(null),
                create: jest.fn().mockImplementation((data) => data),
                save: jest.fn().mockResolvedValue({ name: 'Product 01', description: 'Some Description for testing', price: 20, categoryId: 1 }),
            }),
        };

        const module: TestingModule = await Test.createTestingModule({
            imports: [TestDatabaseModule],
            providers: [
                ProductsRepository,
                { provide: DataSource, useValue: dataSourceMock },
            ],
        }).compile();

        repository = module.get<ProductsRepository>(ProductsRepository);
        (repository as any).create = dataSourceMock.getRepository;
        (repository as any).save = dataSourceMock.getRepository;

    });

    it('should create a new product', async () => {
        const data = { name: 'Product 01', description: 'Some Description for testing', price: 20, categoryId: 1 };
        repository.save = jest.fn().mockResolvedValue(data);
        const createProductDto: CreateProductDto = data;
        await repository.createProduct(createProductDto);
    });
});
