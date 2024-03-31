import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 64px);
  color: white;
  padding: 24px;
  gap: 24px;
`;

export const Image = styled.img`
  @media screen and (max-width: 600px) {
    height: 200px;
    weight: 300px;
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

export const Button = styled.button`
  background-color: #009edd;
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  color: white;
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
