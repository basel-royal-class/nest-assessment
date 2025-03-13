import { Test, TestingModule } from '@nestjs/testing';
import { DummyProductControllerController } from './dummy_product_controller.controller';

describe('DummyProductControllerController', () => {
  let controller: DummyProductControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DummyProductControllerController],
    }).compile();

    controller = module.get<DummyProductControllerController>(DummyProductControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
