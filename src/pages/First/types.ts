import {
  FieldErrorsImpl,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { FormInterface } from "../../types";

export interface FirstInterface {
  register: UseFormRegister<any>;
  errors: Partial<FieldErrorsImpl<FormInterface>>;
  setValue: UseFormSetValue<FormInterface>;
  onSubmitForm: () => void;
}
