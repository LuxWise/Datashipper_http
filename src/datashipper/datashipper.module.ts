import { Module } from '@nestjs/common';
import { DatashipperController } from './datashipper.controller';

@Module({
  controllers: [DatashipperController],
})
export class DatashipperModule {}
