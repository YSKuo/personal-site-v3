import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import SEO from "../components/SEO/SEO";
import theme from "../constants/theme";
import config from "../../data/SiteConfig";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./normalize.css";
import "./index.css";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
} from "../constants/breakpoint";

const GlobalStyle = createGlobalStyle`
${"" /* 待調整 */}
  html {    
    ${MEDIA_QUERY_XS} {
      padding-top: 48px;
    }

    ${MEDIA_QUERY_SM} {
      padding-top: 56px;
    }

    ${MEDIA_QUERY_MD} {
      padding-top: 64px;
    }
  }

  body {
    width: inherit;
  }
`;

const Main = styled.main`
  padding: 3rem 0;
`;

export default function MainLayout({ children }) {
  return (
    <>
      <MaterialThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
          </Helmet>
          <GlobalStyle />
          <Header config={config} />
          <Main>{children}</Main>
          <Footer config={config} />
        </ThemeProvider>
      </MaterialThemeProvider>
    </>
  );
}
