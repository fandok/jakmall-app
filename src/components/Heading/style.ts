import styled from "styled-components";

export const HeadingText = styled.div({
  fontWeight: 700,
  fontSize: 36,
  lineHeight: "44px",
  color: "#FF8A00",
  position: "relative",
});

export const HeadingContent = styled.span({
  position: "relative",
  zIndex: 1,
});

export const HeadingBorder = styled.span({
  minWidth: 300,
  height: 8,
  backgroundColor: "#EEEEEE",
  position: "absolute",
  left: 0,
  bottom: 10,
});
