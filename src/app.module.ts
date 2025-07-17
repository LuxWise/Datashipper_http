import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatashipperModule } from './datashipper/datashipper.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { SimCardModule } from './sim_card/sim_card.module';
@Module({
  imports: [
    DatashipperModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    SimCardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
