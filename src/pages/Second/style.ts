import styled from "styled-components";

export const Options = styled.div({
  display: "flex",
  gap: 10,
  marginBlock: "30px 60px",
});

export const Option = styled.div({
  padding: "12px 15px",
  border: "1px solid #CCCCCC",
  fontWeight: 500,
  fontSize: 13,
  lineHeight: "16px",
  color: "#000000",
  opacity: 0.6,
  minWidth: 180,
  cursor: "pointer",
  ":hover": {
    backgroundColor: "rgba(27, 217, 123, 0.1)",
    border: "2px solid #1BD97B",
    opacity: 1,
  },
  '&[data-active="true"]': {
    backgroundColor: "rgba(27, 217, 123, 0.1)",
    border: "2px solid #1BD97B",
    opacity: 1,
  },
});

export const OptionPrice = styled.div({
  fontWeight: 700,
  fontSize: 16,
  lineHeight: "19px",
  color: "#2D2A40",
});
