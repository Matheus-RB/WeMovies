import styled, { css } from "styled-components";

interface ButtonProps {
  quantityInCart: number;
}

export const Container = styled.div`
  background-color: #ffffff;
  max-height: 292px;
  max-width: 306.67px;
  height: 292px;
  border-radius: 4px;
  padding: 16px;

  @media screen and (max-width: 550px) {
    max-width: none;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Title = styled.h3`
  color: #333333;
  font-weight: 700;
  font-size: 12px;
  line-height: 16.34px;
  text-align: center;
  margin: 0%;
`;

export const Price = styled.span`
  color: #2f2e41;
  font-weight: 700;
  font-size: 16px;
  line-height: 21.79px;
  text-align: center;
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  background-color: #009edd;
  cursor: pointer;

  &:hover {
    background-color: #1fbbf9;
  }

  ${(props) =>
    props.quantityInCart > 0 &&
    css`
      background-color: #039b00;

      &:hover {
        background-color: #09b106;
      }
    `}
`;

export const QuantityVan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  line-height: 16.34px;
`;
