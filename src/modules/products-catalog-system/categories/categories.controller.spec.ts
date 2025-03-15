import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { JwtAuthGuard } from '../../../auth/auth.guard';
import { CreateCategoryDto } from '../categories/dto/create.category.dto';
import { UpdateCategoryDto } from './dto/update.category.dto';
import { CategoryEntity } from '../categories/entity/category.entity';
import { TestDatabaseModule } from '../../../../test-database.module';

describe('CategoriesController', () => {
    let categoriesController: CategoriesController;
    let categoriesService: CategoriesService;

    const mockCategoriesService = {
        createCategory: jest.fn(),
        getCategories: jest.fn(),
        updateCategory: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CategoriesController],
            providers: [
                {
                    provide: CategoriesService,
                    useValue: mockCategoriesService,
                },
            ],
            imports: [TestDatabaseModule]
        })
            .overrideGuard(JwtAuthGuard)
            .useValue({ canActivate: jest.fn(() => true) }) // Mock JwtAuthGuard to always return true
            .compile();

        categoriesController = module.get<CategoriesController>(CategoriesController);
        categoriesService = module.get<CategoriesService>(CategoriesService);
    });

    it('should be defined', () => {
        expect(categoriesController).toBeDefined();
    });

    describe('createCategory', () => {
        it('should call createCategory and return a category', async () => {
            const createCategoryDto: CreateCategoryDto = {
                name: 'Test Category',
            };
            const result: CategoryEntity = {
                id: 1,
                ...createCategoryDto,
                products: []
            };
            mockCategoriesService.createCategory.mockResolvedValue(result);
            expect(await categoriesController.createCategory(createCategoryDto)).toEqual(result);
            expect(mockCategoriesService.createCategory).toHaveBeenCalledWith(createCategoryDto);
        });
    });

    describe('getCategories', () => {
        it('should call getCategories and return an array of categories', async () => {
            const result: CategoryEntity[] = [
                { id: 1, name: 'Category 1', products: [] },
                { id: 2, name: 'Category 2', products: [] },
            ];

            mockCategoriesService.getCategories.mockResolvedValue(result);

            expect(await categoriesController.getCategories()).toEqual(result);
            expect(mockCategoriesService.getCategories).toHaveBeenCalled();
        });
    });

    describe('updateCategory', () => {
        it('should call updateCategory and return an updated category', async () => {
            const updateCategoryDto: UpdateCategoryDto = { id: 1, name: 'Updated Category' };
            const result: CategoryEntity = { id: 1, name: "Updated Category'", products: [], ...updateCategoryDto };

            mockCategoriesService.updateCategory.mockResolvedValue(result);

            expect(await categoriesController.updateCategory(updateCategoryDto)).toEqual(result);
            expect(mockCategoriesService.updateCategory).toHaveBeenCalledWith(updateCategoryDto);
        });
    });
});
