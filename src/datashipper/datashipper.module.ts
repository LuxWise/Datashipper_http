import { Module } from '@nestjs/common';
import { DatashipperController } from './datashipper.controller';
import { SimCardModule } from 'src/simCard/simCard.module';
import { DatashipperService } from './datashipper.service';

@Module({
  imports: [SimCardModule],
  providers: [DatashipperService],
  controllers: [DatashipperController],
})
export class DatashipperModule {}
