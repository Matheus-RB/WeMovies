import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 64px);
  color: white;
  padding: 24px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 450px;
  width: 568px;

  @media screen and (max-width: 600px) {
    height: 350px;
    width: 400px;
  }
  @media screen and (max-width: 400px) {
    height: 250px;
    width: 300px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  line-height: 27.24px;
  font-weight: 700;
  text-align: center;
`;
export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  max-width: 900px;
  text-align: center;
`;
