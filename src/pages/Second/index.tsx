import Heading from "../../components/Heading";
import { Details } from "../../style";
import {
  PAYMENT_KEY,
  PAYMENT_OPTIONS,
  SHIPMENT_KEY,
  SHIPMENT_OPTIONS,
} from "./constants";
import { Option, OptionPrice, Options } from "./style";
import { SecondInterface } from "./types";
import currency from "currency.js";

const Second = ({
  shipment,
  payment,
  setValue,
  onSubmitForm,
}: SecondInterface) => {
  return (
    <Details>
      <Heading label="Shipment" />
      <form
        id="hook-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitForm();
        }}
      >
        <Options>
          {SHIPMENT_OPTIONS.map(({ name, price }) => (
            <Option
              data-active={shipment?.name === name}
              onClick={() => {
                setValue(SHIPMENT_KEY, { name, price });
              }}
              key={name}
            >
              <div>{name}</div>
              <OptionPrice>
                {currency(price, {
                  symbol: "",
                  separator: ",",
                  precision: 0,
                }).format()}
              </OptionPrice>
            </Option>
          ))}
        </Options>
        <Heading label="Payment" />
        <Options>
          {PAYMENT_OPTIONS.map(({ name, amount }) => (
            <Option
              data-active={payment === name}
              onClick={() => {
                setValue(PAYMENT_KEY, name);
              }}
              key={name}
            >
              <div>{name}</div>
              {amount && (
                <OptionPrice>
                  {currency(amount, {
                    symbol: "",
                    separator: ",",
                    precision: 0,
                  }).format()}{" "}
                  left
                </OptionPrice>
              )}
            </Option>
          ))}
        </Options>
      </form>
    </Details>
  );
};

export default Second;
