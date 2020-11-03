import styled, { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    color: white;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;

export const theme: DefaultTheme = {
  footerHeight: "100px",
  paddings: {
    containerTop: "100px",
    containerBottom: "100px",
    side: "30px",
  },
  colors: {
    main: "#222831",
    secondary: "#393e46",
    highlight: "#fddb3a",
  },
};

export const MainContainer = styled.div`
  min-height: calc(100vh - ${(props) => props.theme.footerHeight});
  padding: 0 ${(props) => props.theme.paddings.side};
  padding-top: ${(props) => props.theme.paddings.containerTop};
  padding-bottom: ${(props) => props.theme.paddings.containerBottom};
  background-color: ${(props) => props.theme.colors.main};
`;
