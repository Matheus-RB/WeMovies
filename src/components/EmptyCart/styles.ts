import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 952px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 64px;

  @media screen and (max-width: 1280px) {
    max-width: 752px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 640px;
    padding: 30px;
  }
`;

export const Image = styled.img`
  max-width: 200px;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 21.79px;
  color: #2f2e41;
`;

export const Button = styled.button`
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
`;
