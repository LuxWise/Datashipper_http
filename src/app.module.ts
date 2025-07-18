import { Module } from '@nestjs/common';
import { DatashipperModule } from './datashipper/datashipper.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { SimCardModule } from './sim_card/sim_card.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatashipperModule,
    DatabaseModule,
    SimCardModule,
  ],
})
export class AppModule {}
