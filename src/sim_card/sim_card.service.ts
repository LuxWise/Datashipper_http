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

  findByIccid(iccid: string): Promise<SimCard[]> {
    return this.simCardRepository.find({ where: { iccid: iccid } });
  }

  create(sim: Partial<SimCard>): Promise<SimCard> {
    const simCard = this.simCardRepository.create(sim);
    return this.simCardRepository.save(simCard);
  }

  async update(iccid: string, simData: Partial<SimCard>): Promise<SimCard> {
    const sim = await this.simCardRepository.findOne({ where: { iccid } });
    const updateSim = this.simCardRepository.merge(sim!, simData);
    return this.simCardRepository.save(updateSim);
  }
}
