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
import { MEDIA_QUERY_SM } from "../../constants/breakpoint";

export const Section = styled.section`
  ${MEDIA_QUERY_SM} {
    padding: 1rem 0;
  }
`;

export const SectionTitle = ({ children }) => (
  <Typography component="h2" variant="h3" gutterBottom>
    {children}
  </Typography>
);

export const SectionSubtitle = ({ children }) => (
  <Typography component="h3" variant="h4" gutterBottom>
    {children}
  </Typography>
);

export const P = ({ children }) => {
  const Paragraph = styled(Typography)`
    font-size: 1rem;

    ${MEDIA_QUERY_SM} {
      font-size: ${(props) => props.theme.typography.body1.fontSize};
    }
  `;

  return (
    <Paragraph component="p" variant="body1" gutterBottom>
      {children}
    </Paragraph>
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
