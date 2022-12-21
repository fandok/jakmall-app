export interface SummaryInterface {
  isDropshipper?: boolean;
  isFinishPage: boolean;
  payment?: string;
  shipment?: {
    name: string;
    price: number;
  };
}
