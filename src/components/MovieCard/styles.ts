import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  max-height: 292px;
  max-width: 306.67px;
  width: 306.67px;
  height: 292px;
  border-radius: 4px;
  padding: 16px;
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

export const Button = styled.button`
  border-radius: 4px;
  width: auto;
  height: Fixed 40px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16.34px;
  color: #ffffff;
  background-color: #009edd;
  text-transform: uppercase;
  border: none;
`;
