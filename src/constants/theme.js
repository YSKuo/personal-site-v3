// Default Theme
// https://material-ui.com/customization/default-theme/#default-theme

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { breakpoints } from "./breakpoint";
import { fontSizes } from "./font";

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
    h1: {
      fontSize: fontSizes["6xl"],
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "-0.025em",
    },
    h2: {
      fontSize: fontSizes["5xl"],
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "-0.025em",
    },
    h3: {
      fontSize: fontSizes["4xl"],
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "-0.025em",
    },
    h4: {
      fontSize: fontSizes["3xl"],
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "-0.025em",
    },
    h5: {
      fontSize: fontSizes["2xl"],
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "-0.025em",
    },
    h6: {
      fontSize: fontSizes["xl"],
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "-0.025em",
    },
    body1: {
      fontSize: fontSizes["lg"],
    },
    body2: {
      fontSize: fontSizes["lg"],
    },
  },
};

export const CustomMuiTheme = responsiveFontSizes(createMuiTheme(theme), {
  factor: 2,
});
