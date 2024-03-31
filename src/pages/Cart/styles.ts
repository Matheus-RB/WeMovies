import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 755px) {
    padding: 0 16px 16px 16px;
  }
`;

export const Content = styled.div`
  max-width: 1032px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 24px;

  @media screen and (max-width: 1280px) {
    max-width: 832px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 655px;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Table = styled.table`
  width: 100%;
`;

export const Th = styled.th`
  color: #999999;
  font-size: 14px;
  font-weight: 700;
  line-height: 19.07px;
  text-align: left;
  text-transform: uppercase;
  padding-bottom: 24px;
`;

export const Td = styled.td`
  text-align: left;
  padding: 0;
  padding-bottom: 24px;
`;

export const Produto = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Image = styled.img`
  max-width: 100px;

  @media screen and (max-width: 425px) {
    width: 64px;
    height: 82px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Title = styled.span`
  font-size: 14px;
  line-height: 19.07px;
  color: #2f2e41;
  font-weight: 700;
`;

export const Price = styled.span`
  font-size: 16px;
  line-height: 21.79px;
  color: #2f2e41;
  font-weight: 700;
`;

export const QuantityDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 16px;

  @media screen and (max-width: 600px) {
    gap: 11px;
    height: 38px;
  }
`;

export const QuantityButton = styled.button`
  padding: 0;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const Quantity = styled.p`
  height: 26px;
  width: 62px;
  border: #d9d9d9 1px solid;
  border-radius: 4px;
  color: #2f2e41;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    width: 59px;
  }
`;

export const TrashDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
`;

export const TrashButton = styled.button`
  padding: 4px;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const PriceSubTotal = styled.span`
  color: #2f2e41;
  font-weight: 700;
  font-size: 16px;
  line-height: 21.79px;
`;

export const Line = styled.div`
  border: 1px solid #999999;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding-top: 0;
    width: 100%;
    gap: 16px;
  }
`;

export const StyledLink = styled(Link)`
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ButtonFinish = styled.button`
  background-color: #009edd;
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
  color: white;
  border: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 16.34px;
  width: 137px;
  height: 34px;
  cursor: pointer;

  &:hover {
    background-color: #1fbbf9;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 197.26px;
  height: 21px;

  @media screen and (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const TotalLabel = styled.span`
  font-size: 14px;
  color: #999999;
  font-weight: 900;
  line-height: 19.07px;
  text-transform: uppercase;
`;

export const TotalValue = styled.span`
  color: #2f2e41;
  font-size: 24px;
  font-weight: 700;
  line-height: 32.68px;
`;

export const MobileVersion = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 4px;
    padding: 16px;
    gap: 21px;
    width: 100%;
  }
`;

export const MobileContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
`;

export const First = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Second = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SubTotalDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: 700;
  color: #999999;
  line-height: 16.34px;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
