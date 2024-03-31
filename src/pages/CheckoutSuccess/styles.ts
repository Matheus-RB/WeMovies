import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 0 16px 16px 16px;
  }
`;

export const Content = styled.div`
  height: 64vh;
  border-radius: 4px;
  background-color: #ffffff;
  max-width: 952px;
  width: 100%;
  gap: 24px;
  padding: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1280px) {
    max-width: 752px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 572px;
  }

  @media screen and (max-width: 600px) {
    padding: 64px 24px;
    height: auto;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  line-height: 27.24px;
  color: #2f2e41;
  font-weight: 700;
  text-align: center;
`;

export const ButtonBack = styled.button`
  background-color: #009edd;
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
  color: white;
  border: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 16.34px;
  width: 173px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background-color: #1fbbf9;
  }
`;

export const DivImage = styled.div`
  @media screen and (max-width: 400px) {
    display: flex;
    justify-content: center;
  }
`;

export const Image = styled.img`
  @media screen and (max-width: 400px) {
    width: 81%;
  }
`;
