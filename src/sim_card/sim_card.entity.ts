import { Entity, ObjectId, Column, ObjectIdColumn } from 'typeorm';

@Entity('simcards')
export class SimCard {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  iccid: string;

  @Column()
  company_id: number;

  @Column()
  company_code: string;

  @Column()
  company: string;

  @Column()
  network: string;

  @Column()
  usage_mb: number;
}
