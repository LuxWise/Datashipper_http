interface DatashipperDTO {
  iccid: string;
  company_id: number;
  company_code: string;
  company_name: string;
  connect_time: string;
  close_time: string;
  network: string;
  usage_mb: number;
}

type DatashiperDataDTO = {
  notifications: DatashipperDTO[];
};
