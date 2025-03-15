import { Test, TestingModule } from '@nestjs/testing';
import { DataSource } from 'typeorm';
import { CategoriesRepository } from './categories.repository';
import { CreateCategoryDto } from './dto/create.category.dto';
import { TestDatabaseModule } from '../../../../test-database.module';

describe('CategoriesRepository', () => {
    let repository: CategoriesRepository;
    let dataSourceMock: Partial<DataSource>;

    beforeEach(async () => {

        dataSourceMock = {
            createEntityManager: jest.fn(),
            getRepository: jest.fn().mockReturnValue({
                findOne: jest.fn().mockResolvedValue(null),
                create: jest.fn().mockImplementation((data) => data),
                save: jest.fn().mockResolvedValue({ name: 'Category 01' }),
            }),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CategoriesRepository,
                { provide: DataSource, useValue: dataSourceMock },
            ],
            imports: [TestDatabaseModule]
        }).compile();

        repository = module.get<CategoriesRepository>(CategoriesRepository);
        (repository as any).findOne = dataSourceMock.getRepository;
        (repository as any).create = dataSourceMock.getRepository;
        (repository as any).save = dataSourceMock.getRepository;
    });

    it('should create a new category', async () => {
        const data = { name: 'Category 01' };
        repository.save = jest.fn().mockResolvedValue(data);
        const categoryDTO: CreateCategoryDto = data;
        await repository.createCategory(categoryDTO);
    });
});
