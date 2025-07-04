import { Module } from '@nestjs/common';
import { TcpController } from './tcp.controller';

@Module({
  providers: [],
  controllers: [TcpController],
})
export class TcpModule {}
