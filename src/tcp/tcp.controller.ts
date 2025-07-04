import { Body, Controller, Post } from '@nestjs/common';

@Controller('')
export class TcpController {
  @Post('data-shipper')
  handleData(@Body() data: any) {
    let dataNumber = 0;
    console.log(`Data-${dataNumber++}:`, data);
    return { message: 'Data is recived' };
  }
}
