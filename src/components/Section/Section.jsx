import React from "react";
import styled from "styled-components";
import {
  Container,
  Toolbar,
  Grid,
  Typography,
  Link,
  Button,
  IconButton,
  Hidden,
  Divider,
} from "@material-ui/core";
import { mediaQueryBreakpoint } from "../../constants/breakpoint";

export const Section = styled.section`
  ${mediaQueryBreakpoint("sm")} {
    padding: 1rem 0;
  }
`;

export const SectionTitle = ({ children }) => {
  const Title = styled(Typography)`
    margin-bottom: 2rem;
  `;

  return (
    <Title component="h2" variant="h2" gutterBottom>
      {children}
    </Title>
  );
};

export const SectionSubtitle = ({ children }) => (
  <Typography component="h3" variant="h3" gutterBottom>
    {children}
  </Typography>
);

export const P = ({ children }) => {
  return (
    <Typography component="p" variant="body1" gutterBottom>
      {children}
    </Typography>
  );
};

export const B = ({ children }) => {
  const Bold = styled(Typography)`
    font-weight: bold;
  `;

  return (
    <Bold component="b" variant="body1" gutterBottom>
      {children}
    </Bold>
  );
};

export const A = ({ children, href }) => (
  <Link href={href} target="_blank">
    {children}
  </Link>
);
