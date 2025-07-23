import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { DatashipperService } from './datashipper.service';
import { Request } from 'express';

@Controller()
export class DatashipperController {
  constructor(private readonly datashipperService: DatashipperService) {}

  @Post('data')
  async handleData(@Body() data: DatashiperDataDTO, @Req() req: Request) {
    try {
      const forwardedFor = req.headers['x-forwarded-for'];
      const clientIp =
        typeof forwardedFor === 'string'
          ? forwardedFor.split(',')[0].trim()
          : req.socket.remoteAddress;

      console.log(clientIp);
      console.log(data);
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
