import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.font.primary},${(props) =>
  props.theme.font.secondary};
  }
`;
