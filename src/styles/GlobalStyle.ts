import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    background-color: #2F2E41;
    font-family: 'Open Sans', sans-serif;
    padding: 0px 180px 40px 180px;
  }
`;

export default GlobalStyle;
