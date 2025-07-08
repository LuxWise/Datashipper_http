import { Body, Controller, Post } from '@nestjs/common';

@Controller('')
export class TcpController {
  private lastTime = Date.now();
  private count = 0;

  @Post('data-shipper')
  handleData(@Body() data: any) {
    const now = Date.now();
    const diffInSeconds = ((now - this.lastTime) / 1000).toFixed(2);
    this.lastTime = now;
    this.count++;

    console.log(`→ #${this.count} | Tiempo desde la última: ${diffInSeconds}s`);
    console.log(`Data:`, data);
    return { message: 'Data is recived' };
  }
}
