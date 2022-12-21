import styled from "styled-components";

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
