import React from "react";
//Components 대신 React-Hook
import {gql} from "apollo-boost";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import AppRouter from "./Router";
import { useQuery } from "react-apollo-hooks";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

export default () => {
  const {
    data:{isLoggedIn}
  } = useQuery(QUERY);

  return (  
   <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles/>
      <AppRouter isLoggedIn={isLoggedIn}/>
    </>
  </ThemeProvider>
  );
};