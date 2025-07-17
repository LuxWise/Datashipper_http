import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimCard } from './sim_card.entity';
import { SimCardService } from './sim_card.service';

@Module({
  imports: [TypeOrmModule.forFeature([SimCard])],
  providers: [SimCardService],
  exports: [SimCardService],
})
export class SimCardModule {}
