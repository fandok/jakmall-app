import Heading from "../../components/Heading";
import NavigationComponent from "../../components/Navigation";
import {
  ALPHANUMERIC,
  DELIVERY_ESTIMATION,
  HOME_PAGE,
  RANDOM_LENGTH,
} from "../../constants";
import randomString from "../../helpers/randomString";
import { Details } from "../../style";
import { OrderDelivered, OrderId, ThankYou } from "./style";
import { ThirdInterface } from "./types";

const Third = ({ onClick, shipment }: ThirdInterface) => {
  return (
    <Details>
      <ThankYou>
        <Heading label="Thank you" />
        <OrderId>
          Order ID : {randomString(RANDOM_LENGTH, ALPHANUMERIC)}
        </OrderId>
        <OrderDelivered>
          Your order will be delivered in{" "}
          {DELIVERY_ESTIMATION[shipment?.name || ""]}
        </OrderDelivered>
        <NavigationComponent step={HOME_PAGE} onClick={onClick} />
      </ThankYou>
    </Details>
  );
};

export default Third;
