import { Module } from '@nestjs/common';
import { DatashipperModule } from './datashipper/datashipper.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { SimCardModule } from './simCard/simCard.module';
import { AppController } from './app.controller';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatashipperModule,
    DatabaseModule,
    SimCardModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
