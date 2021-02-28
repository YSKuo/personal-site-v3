// Default Theme
// https://material-ui.com/customization/default-theme/#default-theme

import { createMuiTheme } from "@material-ui/core/styles";
import { breakpoints } from "./breakpoint";

const { xs, sm, md, lg, xl } = breakpoints;

const theme = createMuiTheme({
  palette: {
    breakpoints: {
      values: {
        xs,
        sm,
        md,
        lg,
        xl,
      },
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
});

export default theme;
