import styled from "styled-components";

export const Summary = styled.div({
  flex: 1,
  borderInlineStart: "1px solid #FF8A00",
  paddingInlineStart: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const SummaryText = styled.div({
  fontSize: 24,
  fontWeight: 700,
  color: "#FF8A00",
  lineHeight: "29px",
  marginBlockEnd: 10,
});

export const Purchased = styled.div({
  fontSize: 14,
  lineHeight: "17px",
  color: "#000000",
  opacity: 0.6,
});

export const ShopDetails = styled.div({
  display: "flex",
  justifyContent: "space-between",
  fontSize: 14,
  lineHeight: "17px",
  color: "#000000",
  marginBlockEnd: 12,
});

export const ShopDetailsName = styled.div({
  opacity: 0.6,
});

export const ShopDetailsPrice = styled.div({
  fontWeight: 700,
});

export const ShopTotal = styled.div({
  marginBlockStart: 24,
  marginBlockEnd: 30,
  display: "flex",
  justifyContent: "space-between",
  fontWeight: 700,
  fontSize: 24,
  lineHeight: "29px",
  color: "#FF8A00",
});

export const SubmitButton = styled.button({
  fontWeight: 500,
  padding: "20px 40px",
  backgroundColor: "#FF8A00",
  fontSize: 18,
  lineHeight: "22px",
  display: "block",
  marginInline: "auto",
  color: "#FFFFFF",
  width: "100%",
  border: "none",
  cursor: "pointer",
  ":hover": {
    fontWeight: 700,
  },
});

export const ShopSummary = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 21,
});

export const Separator = styled.div({
  width: 80,
  height: 1,
  backgroundColor: "#D8D8D8",
});

export const SummaryDetailsName = styled.div({
  fontSize: 14,
  lineHeight: "17px",
  color: "#000000",
});

export const SummaryDetailsValue = styled.div({
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "19px",
  color: "#1BD97B",
});
