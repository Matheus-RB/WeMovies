import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 0px 16px;
  max-width: 1080px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  grid-row-gap: 20px;

  @media screen and (max-width: 1280px) {
    max-width: 880px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 700px;
    padding: 0 16px 16px 16px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
