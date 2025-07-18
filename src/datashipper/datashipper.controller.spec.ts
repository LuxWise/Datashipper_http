import { Test, TestingModule } from '@nestjs/testing';
import { DatashipperController } from './datashipper.controller';

describe('DatashipperController', () => {
  let controller: DatashipperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatashipperController],
    }).compile();

    controller = module.get<DatashipperController>(DatashipperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
