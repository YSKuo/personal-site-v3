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
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {
  Section,
  SectionTitle,
  SectionSubtitle,
  P,
  B,
  A,
} from "../../Section/Section";
import { mediaQueryBreakpoint } from "../../../constants/breakpoint";
import StyledDivider from "../../StyledDivider";

function About({ config }) {
  const {
    userName,
    userEmail,
    userResume,
    userLocation,
    userLinks,
    userSkills,
  } = config;

  return (
    <Container>
      <Section>
        <P>Hello!</P>
        <Intro variant="h1" component="h1">
          I’m Arsene Kuo.
        </Intro>
        <Typography variant="body1" component="p" gutterBottom>
          I'm a frontend designer and developer, passionate about improving user
          experience through design and engineering.
        </Typography>
      </Section>
      <Button
        href="/about"
        variant="contained"
        color="secondary"
        size="large"
        endIcon={<ArrowForwardIcon />}
      >
        About
      </Button>
    </Container>
  );
}

const Intro = styled(Typography)`
  font-weight: bold;
  font-size: 3rem;

  ${mediaQueryBreakpoint("sm")} {
    font-size: 4rem;
  }
`;

export default About;
