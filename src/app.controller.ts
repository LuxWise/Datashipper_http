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
  async getData(@Query('iccid') iccid?: string): Promise<SimCard[] | SimCard> {
    try {
      if (iccid) {
        const sim = await this.simCardServices.findByIccid(iccid);
        if (!sim) {
          throw new NotFoundException(
            `Sim Card with iccid: ${iccid} doesn't exists`,
          );
        }
        return sim;
      }

      const sims = await this.simCardServices.findAll();
      return sims;
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: "It can't be done obtain sim card data",
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
