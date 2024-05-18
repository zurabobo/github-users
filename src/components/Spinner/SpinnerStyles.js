import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Preloader = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid;
  border-color: #dbdcef;
  border-right-color: #181a1e;
  animation: ${spinnerAnimation} 1s infinite linear;
  margin: 0 auto;
`;
