import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Roboto", sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #FFF8F1;
    color: #E66767;
  }

  button {
    font-family: inherit;
  }

  img {
    display: block;
  }
`
