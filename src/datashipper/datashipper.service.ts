import { Injectable } from '@nestjs/common';
import { SimCard } from 'src/simCard/simCard.entity';
import { SimCardService } from 'src/simCard/simCard.service';

@Injectable()
export class DatashipperService {
  constructor(private readonly simCardService: SimCardService) {}

  async insertData(data: DatashiperDataDTO) {
    const results: { action: string; sim: SimCard }[] = [];

    for (let i = 0; i < data.notifications.length; i++) {
      const simInfo = data.notifications[i];

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
