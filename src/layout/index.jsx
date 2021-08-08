import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import SEO from "../components/SEO/SEO";
import { theme, CustomMuiTheme } from "../constants/theme";
import config from "../../data/SiteConfig";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./normalize.css";
import "./index.css";
import { mediaQueryBreakpoint } from "../constants/breakpoint";

export default function MainLayout({ children }) {
  return (
    <MaterialThemeProvider theme={CustomMuiTheme}>
      <ThemeProvider theme={theme}>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="zh-TW" />
        </Helmet>
        <GlobalStyle />
        <Header config={config} />
        <Main>{children}</Main>
        <Footer config={config} />
      </ThemeProvider>
    </MaterialThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
${"" /* 待調整 */}
  html {    
    ${mediaQueryBreakpoint("xs")} {
      padding-top: 48px;
    }

    ${mediaQueryBreakpoint("sm")} {
      padding-top: 56px;
    }

    ${mediaQueryBreakpoint("md")} {
      padding-top: 64px;
    }
  }

  body {
    width: inherit;
  }

  * {
    font-family: ${(props) => props.theme.typography.fontFamily} 
  }
`;

const Main = styled.main`
  padding: 3rem 0;
`;
