import { Body, Controller, Post } from '@nestjs/common';
import { DatashipperService } from './datashipper.service';

@Controller('datashipper')
export class DatashipperController {
  constructor(private readonly datashipperService: DatashipperService) {}

  @Post('data')
  async handleData(@Body() data: datashiperData) {
    await this.datashipperService.insertData(data);
    return { message: 'Data is recived' };
  }
}
