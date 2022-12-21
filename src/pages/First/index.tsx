import { useState } from "react";
import Heading from "../../components/Heading";
import { Details } from "../../style";
import {
  DetailsHeader,
  Dropshipper,
  Form,
  FormInput,
  FormTextArea,
} from "./style";
import { FirstInterface } from "./types";

const First = ({
  register,
  errors,
  setValue,
  onSubmitForm,
}: FirstInterface) => {
  const [isDropshipper, setIsDropshipper] = useState(false);

  const {
    email,
    dropshipper_name,
    dropshipper_phone_number,
    address,
    phone_number,
  } = errors;

  return (
    <Details>
      <DetailsHeader>
        <Heading label="Delivery Details" />
        <Dropshipper>
          <input
            onClick={() => {
              setValue("is_dropshipper", !isDropshipper);
              setIsDropshipper((prev) => !prev);
            }}
            type="checkbox"
          />
          <span>Send as dropshipper</span>
        </Dropshipper>
      </DetailsHeader>
      <Form
        id="hook-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitForm();
        }}
      >
        <FormInput
          id="email"
          data-error={Boolean(email)}
          data-placeholder="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        <FormInput
          data-error={Boolean(dropshipper_name)}
          disabled={!isDropshipper}
          placeholder="Dropshipper name"
          {...register("dropshipper_name")}
        />
        <FormInput
          data-error={Boolean(phone_number)}
          placeholder="Phone Number"
          type="tel"
          {...register("phone_number", {
            required: true,
            minLength: 6,
            maxLength: 20,
          })}
        />
        <FormInput
          data-error={Boolean(dropshipper_phone_number)}
          disabled={!isDropshipper}
          placeholder="Dropshipper phone number"
          type="tel"
          {...register("dropshipper_phone_number", {
            required: isDropshipper,
            minLength: 6,
            maxLength: 20,
            pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\\./0-9]*$/,
          })}
        />
        <FormTextArea
          data-error={Boolean(address)}
          rows={4}
          placeholder="Delivery Address"
          {...register("address", { required: true, maxLength: 120 })}
        />
      </Form>
    </Details>
  );
};

export default First;
