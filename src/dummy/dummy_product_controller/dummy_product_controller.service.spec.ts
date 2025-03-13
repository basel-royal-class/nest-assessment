import { Test, TestingModule } from '@nestjs/testing';
import { DummyProductControllerService } from './dummy_product_controller.service';

describe('DummyProductControllerService', () => {
  let service: DummyProductControllerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DummyProductControllerService],
    }).compile();

    service = module.get<DummyProductControllerService>(DummyProductControllerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
