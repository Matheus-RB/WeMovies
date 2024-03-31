import styled, { keyframes } from "styled-components";

export const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const SpinnerContainer = styled.div`
  position: relative;
`;

export const OuterCircle = styled.div`
  width: 12px;
  height: 12px;
  border: 4px solid transparent;
  border-radius: 50%;
  position: absolute;
`;

export const InnerCircle = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-radius: 50%;
  border-top-color: transparent;
  animation: ${spin} 1s linear infinite;
  position: absolute;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
`;
