interface Datashipper {
  iccid: string;
  company_id: number;
  company_code: string;
  country_name: string;
  network: string;
  usage_mb: number;
}

type datashiperData = {
  notifications: Datashiper[];
};
