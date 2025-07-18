import { Injectable } from '@nestjs/common';
import { SimCard } from 'src/sim_card/sim_card.entity';
import { SimCardService } from 'src/sim_card/sim_card.service';

@Injectable()
export class DatashipperService {
  constructor(private readonly simCardService: SimCardService) {}

  async insertData(data: datashiperData) {
    const results: { action: string; sim: SimCard }[] = [];

    for (let i = 0; i < data.notifications.length; i++) {
      const simInfo = data.notifications[i] as {
        iccid: string;
        company_id: number;
        company_code: string;
        company_name: string;
        network: string;
        usage_mb: number;
      };

      const simcardExists = await this.simCardService.findByIccid(
        simInfo.iccid,
      );

      if (!simcardExists) {
        const created = await this.simCardService.create(simInfo);
        results.push({ action: 'created', sim: created });
      } else {
        const updated = await this.simCardService.update(
          simInfo.iccid,
          simInfo,
        );
        results.push({ action: 'updated', sim: updated });
      }
    }
    return results;
  }
}
