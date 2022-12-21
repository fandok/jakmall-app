import styled from "styled-components";

export const Main = styled.div({
  backgroundColor: "#FFFFFF",
  marginInline: 55,
  marginBlockStart: 95,
  paddingBlock: 30,
  paddingInlineStart: 40,
  paddingInlineEnd: 20,
  position: "relative",
});

export const Navigation = styled.div({
  fontSize: 14,
  lineHeight: "17px",
  fontWeight: 500,
  color: "#000000",
  position: "relative",
  marginBlockEnd: 24,
  width: "max-content",
  cursor: "pointer",
  ":hover": {
    fontWeight: 700,
  },
});

export const ArrowBack = styled.img({
  width: 18,
  height: 18,
  alt: "arrow-back",
  position: "absolute",
  top: 0,
  left: 0,
});

export const NavigationText = styled.span({
  marginInlineStart: 28,
});

export const Content = styled.div({
  display: "flex",
  gap: 20,
  minHeight: 500,
});

export const Stepper = styled.div({
  position: "absolute",
  top: -30,
  left: 0,
  right: 0,
  width: "max-content",
  marginInline: "auto",
  padding: "20px 38px",
  borderRadius: 35,
  backgroundColor: "#FFFAE6",
  display: "flex",
  gap: 21,
});

export const StepNumber = styled.span({
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "19px",
  color: "#FF8A00",
  backgroundColor: "rgba(255, 138, 0, 0.2)",
  borderRadius: 15,
  padding: "6px 10px 5px",
  marginInlineEnd: 10,
  ":hover": {
    backgroundColor: "#FF8A00",
    color: "#FFFFFF",
  },
  '&[data-active="true"]': {
    backgroundColor: "#FF8A00",
    color: "#FFFFFF",
  },
});

export const StepTitle = styled.span({
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "19px",
  color: "#FF8A00",
});

export const Details = styled.div({
  flex: 2,
});
