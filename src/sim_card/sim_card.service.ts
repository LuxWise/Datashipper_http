import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SimCard } from './sim_card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SimCardService {
  constructor(
    @InjectRepository(SimCard)
    private readonly simCardRepository: Repository<SimCard>,
  ) {}

  findAll(): Promise<SimCard[]> {
    return this.simCardRepository.find();
  }

  create(sim: Partial<SimCard>): Promise<SimCard> {
    const simCard = this.simCardRepository.create(sim);
    return this.simCardRepository.save(simCard);
  }

  async createTest() {
    const simCardTest = this.simCardRepository.create({
      iccid: '123456789012345',
      company_id: 1,
      company_code: 'ABC',
      company: 'Moabits',
      network: '4G',
      usage_mb: 250,
    });

    return await this.simCardRepository.save(simCardTest);
  }
}
