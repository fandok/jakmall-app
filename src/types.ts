export interface FormInterface {
  email: string;
  dropshipper_name: string;
  phone_number: string;
  dropshipper_phone_number: string;
  address: string;
  is_dropshipper?: boolean;
  shipment?: {
    name: string;
    price: number;
  };
  payment?: string;
}
