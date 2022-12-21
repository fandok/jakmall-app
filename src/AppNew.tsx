import isEmpty from "lodash.isempty";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

import imgRight from "./assets/arrow-right.png";
import NavigationComponent from "./components/Navigation";
import SummaryPage from "./components/Summary";
import { DELIVERY_PAGE, FINISH_PAGE, PAYMENT_PAGE, STEPS } from "./constants";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import { Content, Main, StepNumber, Stepper, StepTitle } from "./style";
import { FormInterface } from "./types";

const AppNew = () => {
  const [step, setStep] = useState(DELIVERY_PAGE);
  const [_, setFormData] = useState({});
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormInterface>();

  const isDropshipper = watch("is_dropshipper") || false;
  const shipment = watch("shipment") || { name: "", price: 0 };
  const payment = watch("payment") || "";

  const onSubmit = (data: any) => {
    setFormData({ ...data });
  };

  const handleSubmitForm = () => {
    handleSubmit(onSubmit)();
    if (isEmpty(errors)) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const PAGE: Record<number, any> = {
    [DELIVERY_PAGE]: (
      <First
        setValue={setValue}
        errors={errors}
        register={register}
        onSubmitForm={handleSubmitForm}
      />
    ),
    [PAYMENT_PAGE]: (
      <Second
        shipment={shipment}
        payment={payment}
        setValue={setValue}
        onSubmitForm={handleSubmitForm}
      />
    ),
    [FINISH_PAGE]: <Third shipment={shipment} onClick={handlePrevStep} />,
  };

  return (
    <Main>
      <Stepper>
        {STEPS.map((stepName, key) => (
          <Fragment key={key}>
            <div>
              <StepNumber data-active={key + 1 === step}>{key + 1}</StepNumber>
              <StepTitle>{stepName}</StepTitle>
            </div>
            {key + 1 !== FINISH_PAGE && (
              <img src={imgRight} alt="arrow-right" />
            )}
          </Fragment>
        ))}
      </Stepper>
      <NavigationComponent step={step} onClick={handlePrevStep} />
      <Content>
        {PAGE[step]}
        <SummaryPage
          isDropshipper={isDropshipper}
          isFinishPage={step === FINISH_PAGE}
          shipment={shipment}
          payment={payment}
        />
      </Content>
    </Main>
  );
};

export default AppNew;
