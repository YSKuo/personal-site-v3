import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { render } from "@testing-library/react";
import { theme } from "../constants/theme";

const SizeWrapper = ({ children }) => {
  const initTheme = createMuiTheme({
    props: { MuiWithWidth: { initialWidth: "lg" } },
  });

  return (
    <MuiThemeProvider theme={initTheme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MuiThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: SizeWrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render, SizeWrapper };
