import styled from "styled-components";

export const DetailsHeader = styled.div({
  display: "flex",
  justifyContent: "space-between",
  marginBlockEnd: 36,
});

export const Dropshipper = styled.div({
  paddingBlock: 14,
});

export const Form = styled.form({
  display: "flex",
  columnGap: 30,
  rowGap: 10,
  flexWrap: "wrap",
});

export const FormInput = styled.input({
  flex: "40%",
  maxWidth: 400,
  padding: "21px 15px 20px",
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "19px",
  color: "#000000",
  position: "relative",
  border: "1px solid #CCCCCC",
  "::placeholder": {
    opacity: 0.4,
  },
  ":focus": {
    "::placeholder": {
      position: "absolute",
      fontSize: 13,
      lineHeight: "16px",
      opacity: 0.8,
      top: 9,
    },
  },
  '&[data-error="true"]': {
    borderColor: "#FF8A00",
  },
});

export const FormTextArea = styled.textarea({
  minWidth: 400,
  padding: "21px 15px 20px",
  resize: "none",
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "19px",
  color: "#000000",
  border: "1px solid #CCCCCC",
  ":focus": {
    "::placeholder": {
      position: "absolute",
      fontSize: 13,
      lineHeight: "16px",
      opacity: 0.8,
      top: 9,
    },
  },
  '&[data-error="true"]': {
    borderColor: "#FF8A00",
  },
});
