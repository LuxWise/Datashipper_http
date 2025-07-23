import { Entity, ObjectId, Column, ObjectIdColumn } from 'typeorm';

@Entity('simcard')
export class SimCard {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  iccid: string;

  @Column()
  company_id: number;

  @Column()
  company_code: string;

  @Column()
  company: string;

  @Column()
  connect_time: string;

  @Column()
  close_time: string;

  @Column()
  network: string;

  @Column()
  usage_mb: number;
}
