import { Injectable } from '@nestjs/common';
import { SimCardService } from 'src/sim_card/sim_card.service';

@Injectable()
export class DatashipperService {
  constructor(private readonly simCardService: SimCardService) {}

  insertData(data: datashiperData) {
    for (let i = 0; i < data.notifications.length; i++) {
      const simInfo = data.notifications[i] as {
        iccid: string;
        company_id: number;
        company_code: string;
        company_name: string;
        network: string;
        usage_mb: number;
      };
      return this.simCardService.create(simInfo);
    }
  }
}
