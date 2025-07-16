import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatashipperModule } from './datashipper/datashipper.module';

@Module({
  imports: [DatashipperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
