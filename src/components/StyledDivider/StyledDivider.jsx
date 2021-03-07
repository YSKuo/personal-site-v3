import React from "react";
import styled from "styled-components";
import { Divider } from "@material-ui/core";
import { mediaQueryBreakpoint } from "../../constants/breakpoint";

const DividerSetMargin = styled(Divider)`
  margin: ${(props) => props.ymargin} 0;
`;

export const StyledDivider = ({ yMargin }) => {
  return <DividerSetMargin ymargin={yMargin} />;
};

export default StyledDivider;
