import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export type HeaderProps = {
  children: ReactNode;
};

export const Header = styled.header<HeaderProps>`
  color: #ffffff;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  max-width: 1080px;
  justify-content: space-between;

  @media screen and (max-width: 1280px) {
    max-width: 880px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 700px;
  }
`;

export const Name = styled.span`
  font-weight: 700;
  line-height: 27.4px;
  font-size: 20px;
`;

export const itemRight = styled.div`
  display: flex;
  gap: 10px;
`;

export const subItemRight = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  font-weight: 600;
  font-size: 14px;
  line-height: 19.07px;
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: #009edd;
  }
`;

export const amount = styled.span`
  color: #999999;
  font-size: 12px;
  font-weight: 600;
  line-height: 16.34px;
`;

export const containerIMG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;
