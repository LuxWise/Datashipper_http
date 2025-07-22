import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DatashipperModule } from './datashipper/datashipper.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { SimCardModule } from './simCard/simCard.module';
import { AppController } from './app.controller';
import { IpFilterMiddleware } from './ip-filter.middleware';
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IpFilterMiddleware).forRoutes('*');
  }
}
