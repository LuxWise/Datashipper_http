import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimCard } from './simCard.entity';
import { SimCardService } from './simCard.service';

@Module({
  imports: [TypeOrmModule.forFeature([SimCard])],
  providers: [SimCardService],
  exports: [SimCardService],
})
export class SimCardModule {}
