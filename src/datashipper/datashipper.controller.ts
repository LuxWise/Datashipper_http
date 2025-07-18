import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { DatashipperService } from './datashipper.service';

@Controller('datashipper')
export class DatashipperController {
  constructor(private readonly datashipperService: DatashipperService) {}

  @Post('data')
  async handleData(@Body() data: DatashiperDataDTO) {
    try {
      await this.datashipperService.insertData(data);
      return { message: 'Data is recived' };
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'No se pudo obtener la lista de SimCards',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
