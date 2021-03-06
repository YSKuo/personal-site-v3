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
import FeaturedPostListing from "../../FeaturedPostListing/FeaturedPostListing";

function Home({ config, featuredPostEdges }) {
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
        <Paragraph variant="h4" component="p" gutterBottom>
          I'm a frontend designer and developer, passionate about improving user
          experience through design and engineering.
        </Paragraph>
        <Button
          href="/about"
          variant="contained"
          color="secondary"
          size="large"
          endIcon={<ArrowForwardIcon />}
        >
          About
        </Button>
      </Section>

      <StyledDivider yMargin="2rem" />
      <Section>
        <SectionTitle>Blog</SectionTitle>
        <FeaturedPostListing postEdges={featuredPostEdges} />
        <Button
          href="/blog"
          variant="outlined"
          color="primary"
          size="large"
          endIcon={<ArrowForwardIcon />}
        >
          More Posts
        </Button>
      </Section>
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

const Paragraph = styled(Typography)`
  font-weight: 400;
  margin-bottom: 2rem;
  line-height: 1.5;
  letter-spacing: 0;
`;

export default Home;
