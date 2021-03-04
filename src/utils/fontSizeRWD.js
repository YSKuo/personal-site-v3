import { fontSizes } from "../constants/font";
import { mediaQueryBreakpoint } from "../constants/breakpoint";

function fontSizeRWD(text, [xs, sm, md]) {
  return `${text} {
    ${mediaQueryBreakpoint("xs")} {
      font-size: ${fontSizes[xs]};
    }
    ${mediaQueryBreakpoint("sm")} {
      font-size: ${fontSizes[sm]};
    }
    ${mediaQueryBreakpoint("md")} {
      font-size: ${fontSizes[md]};
    }
  }`;
}

export default fontSizeRWD;
