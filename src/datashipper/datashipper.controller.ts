import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { DatashipperService } from './datashipper.service';

@Controller()
export class DatashipperController {
  constructor(private readonly datashipperService: DatashipperService) {}

  @Post('data')
  async handleData(@Body() data: DatashiperDataDTO) {
    try {
      await this.datashipperService.insertData(data);
      return { message: 'Data is recived' };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: `Error to receive data: ${error}`,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
