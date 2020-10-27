import React from "react";
//Components 대신 React-Hook
import {ThemeProvider} from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";

export default () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles/>
  </ThemeProvider>
);