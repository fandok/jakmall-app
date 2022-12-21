import {
  DELIVERY_PAGE,
  FINISH_PAGE,
  HOME_PAGE,
  PAYMENT_PAGE,
} from "../../constants";
import { ArrowBack, Navigation, NavigationText } from "./style";

import imgBack from "../../assets/arrow-back.png";
import { NavigationInterface } from "./types";

const NAV_TEXT: Record<number, any> = {
  [DELIVERY_PAGE]: "cart",
  [PAYMENT_PAGE]: "payment",
  [HOME_PAGE]: "homepage",
};

const NavigationComponent = ({ step, onClick }: NavigationInterface) => {
  return (
    <Navigation
      onClick={() => {
        step !== DELIVERY_PAGE && onClick();
      }}
    >
      {step !== FINISH_PAGE && (
        <>
          {" "}
          <ArrowBack src={imgBack} />{" "}
          <NavigationText>Back to {NAV_TEXT[step]}</NavigationText>
        </>
      )}
    </Navigation>
  );
};

export default NavigationComponent;
