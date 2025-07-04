import { Body, Controller, Post } from '@nestjs/common';

@Controller('')
export class TcpController {
  @Post('data-shipper')
  handleData(@Body() data: any) {
    console.log('Data: ', data);
    return { message: 'Data is recived' };
  }
}
