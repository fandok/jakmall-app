import currency from "currency.js";
import { DELIVERY_ESTIMATION } from "../../constants";
import {
  Purchased,
  Separator,
  ShopDetails,
  ShopDetailsName,
  ShopDetailsPrice,
  ShopSummary,
  ShopTotal,
  SubmitButton,
  Summary,
  SummaryDetailsName,
  SummaryDetailsValue,
  SummaryText,
} from "./style";
import { SummaryInterface } from "./types";

const SummaryPage = ({
  isDropshipper,
  isFinishPage,
  shipment,
  payment,
}: SummaryInterface) => {
  const getTotalPrice = () => {
    let defaultPrice = 500000;
    if (isDropshipper) {
      defaultPrice += 5900;
    }

    if (shipment?.price) {
      defaultPrice += shipment?.price;
    }

    return defaultPrice;
  };

  return (
    <Summary>
      <ShopSummary>
        <div>
          <SummaryText>Summary</SummaryText>
          <Purchased>10 items purchased</Purchased>
        </div>
        {shipment?.name && (
          <>
            <Separator />
            <div>
              <SummaryDetailsName>Delivery estimation</SummaryDetailsName>
              <SummaryDetailsValue>
                {DELIVERY_ESTIMATION[shipment?.name]}
              </SummaryDetailsValue>
            </div>
          </>
        )}
        {payment && (
          <>
            <Separator />
            <div>
              <SummaryDetailsName>Payment method</SummaryDetailsName>
              <SummaryDetailsValue>{payment}</SummaryDetailsValue>
            </div>
          </>
        )}
      </ShopSummary>
      <div>
        <ShopDetails>
          <ShopDetailsName>Cost of goods</ShopDetailsName>
          <ShopDetailsPrice>500,000</ShopDetailsPrice>
        </ShopDetails>
        {isDropshipper && (
          <ShopDetails>
            <ShopDetailsName>Dropshipping Fee</ShopDetailsName>
            <ShopDetailsPrice>5,900</ShopDetailsPrice>
          </ShopDetails>
        )}

        {shipment?.name && (
          <ShopDetails>
            <ShopDetailsName>
              <b>{shipment?.name}</b> shipment
            </ShopDetailsName>
            <ShopDetailsPrice>
              {currency(shipment?.price, {
                symbol: "",
                separator: ",",
                precision: 0,
              }).format()}
            </ShopDetailsPrice>
          </ShopDetails>
        )}

        <ShopTotal>
          <div>Total</div>
          <div>
            {currency(getTotalPrice(), {
              symbol: "",
              separator: ",",
              precision: 0,
            }).format()}
          </div>
        </ShopTotal>
        {!isFinishPage && (
          <SubmitButton form="hook-form" type="submit">
            Continue to Payment
          </SubmitButton>
        )}
      </div>
    </Summary>
  );
};

export default SummaryPage;
