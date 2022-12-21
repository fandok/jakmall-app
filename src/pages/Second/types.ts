import { UseFormSetValue } from "react-hook-form";
import { FormInterface } from "../../types";

export interface SecondInterface {
  payment?: string;
  shipment?: {
    name: string;
    price: number;
  };
  setValue: UseFormSetValue<FormInterface>;
  onSubmitForm: () => void;
}
