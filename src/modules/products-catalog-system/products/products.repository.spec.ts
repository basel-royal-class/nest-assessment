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
                save: jest.fn().mockResolvedValue({ name: 'Product 01', description: 'Some Description for testing', price: 20, categoryId: 1 }),
            }),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ProductsRepository,
                { provide: DataSource, useValue: dataSourceMock },
            ],
        }).compile();

        repository = module.get<ProductsRepository>(ProductsRepository);
        // Directly create the repository instance
        //  repository = new ProductsRepository(dataSourceMock as DataSource);
    });

    it('should create a new product', async () => {
        const data = { name: 'Product 01', description: 'Some Description for testing', price: 20, categoryId: 1 };
        repository.save = jest.fn().mockResolvedValue(data);
        const createProductDto: CreateProductDto = data;
        const result = await repository.createProduct(createProductDto);
        expect(repository.save).toHaveBeenCalledWith(createProductDto);
        expect(repository.create).toHaveBeenCalledWith(createProductDto);
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





// import { Injectable } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { DataSource, Repository } from 'typeorm';
// import { ProductsRepository } from './products.repository';
// import { ProductEntity } from './entity/product.entity';
// import { Users } from '../../../users/users.entity';
// import { TestDatabaseModule } from '../../../../test-database.module';

// @Injectable()
// class ProductsRepositoryTest extends ProductsRepository {
//     constructor(dataSource: DataSource) {
//         super(dataSource);
//     }
// }

// describe('PostRepository (Integration Test)', () => {
//     let module: TestingModule;
//     let postRepository: ProductsRepositoryTest;
//     let dbRepo: Repository<ProductEntity>;
//     let userRepo: Repository<Users>;

//     // connected the test database and included the repository needed for testing the repository I am testing.
//     beforeAll(async () => {
//         module = await Test.createTestingModule({
//             imports: [TestDatabaseModule, TypeOrmModule.forFeature([ProductEntity, Users])],
//             providers: [ProductsRepositoryTest],
//         }).compile();

//         postRepository = module.get(ProductsRepositoryTest);
//         dbRepo = module.get(DataSource).getRepository(ProductEntity);
//         userRepo = module.get(DataSource).getRepository(Users);
//     });

//     afterEach(async () => {
//         await dbRepo.createQueryBuilder().delete().execute();
//         await userRepo.createQueryBuilder().delete().execute();
//     });

//     afterAll(async () => {
//         await module.close();
//     });

//     it('should save and retrieve posts with an author', async () => {
//         const testUser = userRepo.create({
//             id: 1,
//             name: 'Test User',
//             email: 'test@example.com',
//         });

//         await userRepo.save(testUser);

//         const testPost = dbRepo.create({
//             name: 'Test Post',
//             description: 'This is a test',
//             categoryId: 1,
//         });

//         await dbRepo.save(testPost);

//         // const result = await postRepository.findPostsWithAuthors(1);

//         // expect(result).toHaveLength(1);
//         // expect(result[0].title).toBe('Test Post');
//         // expect(result[0].author.id).toBe(1);
//     });
// });


