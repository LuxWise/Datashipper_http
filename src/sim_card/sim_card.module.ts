import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimCard } from './sim_card.entity';
import { SimCardService } from './sim_card.service';
import { SimCardController } from './sim_card.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SimCard])],
  providers: [SimCardService],
  controllers: [SimCardController],
  exports: [SimCardService],
})
export class SimCardModule {}
