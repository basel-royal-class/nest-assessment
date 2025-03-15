import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { CategoriesRepository } from './categories.repository';
import { CreateCategoryDto } from './dto/create.category.dto';
import { UpdateCategoryDto } from './dto/update.category.dto';
import { CategoryEntity } from './entity/category.entity';
import { TestDatabaseModule } from '../../../../test-database.module';

describe('CategoriesService', () => {
    let categoriesService: CategoriesService;
    let categoriesRepository: CategoriesRepository;

    const mockCategoriesRepository = {
        createCategory: jest.fn(),
        updateCategory: jest.fn(),
        getCategories: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CategoriesService,
                {
                    provide: CategoriesRepository,
                    useValue: mockCategoriesRepository,
                },
            ],
            imports: [TestDatabaseModule]
        }).compile();

        categoriesService = module.get<CategoriesService>(CategoriesService);
        categoriesRepository = module.get<CategoriesRepository>(CategoriesRepository);
    });

    it('should be defined', () => {
        expect(categoriesService).toBeDefined();
    });

    describe('createCategory', () => {
        it('should call createCategory and return a category', async () => {
            const createCategoryDto: CreateCategoryDto = {
                name: 'Test Category',
            };
            const result: CategoryEntity = {
                id: 1,
                ...createCategoryDto,
                products: [],
            };

            mockCategoriesRepository.createCategory.mockResolvedValue(result);

            expect(await categoriesService.createCategory(createCategoryDto)).toEqual(result);
            expect(mockCategoriesRepository.createCategory).toHaveBeenCalledWith(createCategoryDto);
        });
    });

    describe('updateCategory', () => {
        it('should call updateCategory and return an updated category', async () => {
            const updateCategoryDto: UpdateCategoryDto = { id: 1, name: 'Updated Category' };
            const result: CategoryEntity = { id: 1, ...updateCategoryDto, products: [], name: "Updated Category" };

            mockCategoriesRepository.updateCategory.mockResolvedValue(result);

            expect(await categoriesService.updateCategory(updateCategoryDto)).toEqual(result);
            expect(mockCategoriesRepository.updateCategory).toHaveBeenCalledWith(updateCategoryDto);
        });
    });

    describe('getCategories', () => {
        it('should call getCategories and return an array of categories', async () => {
            const result: CategoryEntity[] = [
                { id: 1, name: 'Category 1', products: [] },
                { id: 2, name: 'Category 2', products: [] },
            ];

            mockCategoriesRepository.getCategories.mockResolvedValue(result);

            expect(await categoriesService.getCategories()).toEqual(result);
            expect(mockCategoriesRepository.getCategories).toHaveBeenCalled();
        });
    });
});
