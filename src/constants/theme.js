// Default Theme
// https://material-ui.com/customization/default-theme/#default-theme

import { createMuiTheme } from "@material-ui/core/styles";
import { breakpoints } from "./breakpoint";

const { xs, sm, md, lg, xl } = breakpoints;

export const theme = {
  breakpoints: {
    values: {
      xs,
      sm,
      md,
      lg,
      xl,
    },
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#90a4ae",
      light: "#c1d5e0",
      dark: "#62757f",
    },
    secondary: {
      main: "#0097a7",
      light: "#56c8d8",
      dark: "#006978",
    },
  },
  typography: {
    fontFamily: ["Inter", "Roboto", '"Helvetica Neue"', "sans-serif"].join(","),
    body1: {
      fontSize: "1.25rem",
    },
  },
};

export const CustomMuiTheme = createMuiTheme(theme);
