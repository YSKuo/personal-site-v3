import React from "react";
import styled from "styled-components";
import { Divider } from "@material-ui/core";
import { mediaQueryBreakpoint } from "../../constants/breakpoint";

export const StyledDivider = ({ yMargin }) => {
  const DividerSetMargin = styled(Divider)`
    margin: ${yMargin} 0;
  `;
  return <DividerSetMargin />;
};

export default StyledDivider;
