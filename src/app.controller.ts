import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { SimCardService } from './simCard/simCard.service';
import { SimCard } from './simCard/simCard.entity';

@Controller('datashipper')
export class AppController {
  constructor(private readonly simCardServices: SimCardService) {}

  @Get()
  async getData(): Promise<SimCard[]> {
    try {
      const sims = await this.simCardServices.findAll();
      return sims;
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

  @Get()
  async getDataByIccid(@Query('iccid') iccid: string): Promise<SimCard> {
    try {
      const sim = await this.simCardServices.findByIccid(iccid);

      if (!sim) {
        throw new NotFoundException(`SimCard con iccid: ${iccid} no existe`);
      }

      return sim;
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
