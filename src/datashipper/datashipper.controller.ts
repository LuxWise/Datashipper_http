import { Body, Controller, Post } from '@nestjs/common';

@Controller('datashipper')
export class DatashipperController {
  @Post('data')
  handleData(@Body() data: any) {
    console.log(`Data:`, data);
    return { message: 'Data is recived' };
  }
}
