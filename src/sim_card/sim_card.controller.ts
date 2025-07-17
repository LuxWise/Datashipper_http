import { Controller, Post } from '@nestjs/common';
import { SimCardService } from './sim_card.service';

@Controller('simCard')
export class SimCardController {
  constructor(private readonly simCardService: SimCardService) {}

  @Post('seed')
  async setSeed() {
    return await this.simCardService.createTest();
  }
}
