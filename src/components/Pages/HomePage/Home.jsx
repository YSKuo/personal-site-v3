import React from "react";
import styled from "styled-components";
import { Container, Typography, Button, Hidden } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Section, SectionTitle, P, B, A } from "../../Section/Section";
import { mediaQueryBreakpoint } from "../../../constants/breakpoint";
import StyledDivider from "../../StyledDivider";
import FeaturedPostListing from "../../FeaturedPostListing/FeaturedPostListing";
import Avatar from "../../../assets/avatar.svg";

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
        <IntroFlexBox>
          <TextBlock>
            <P>Hello!</P>
            <Intro variant="h1" component="h1">
              I’m Arsene Kuo.
            </Intro>
            <Paragraph variant="h5" component="p" gutterBottom>
              I'm a frontend designer and developer, passionate about improving
              user experience through design and engineering.
            </Paragraph>
          </TextBlock>
          <Hidden lgDown>
            <AvatarBlock>
              <Avatar width="50%" height="50%" />
            </AvatarBlock>
          </Hidden>
        </IntroFlexBox>

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

export default Home;

const IntroFlexBox = styled.div`
  display: flex;
`;

const TextBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AvatarBlock = styled.div`
  flex: 1;
  display: flex;
  height: fit-content;
  justify-content: center;
  align-items: center;
`;

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

const SVG = ({
  style = {},
  fill = "#fff",
  width = "100%",
  className = "",
  height = "100%",
  viewBox = "0 0 32 32",
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="htpp://www.w3.org/1999/xlink"
  >
    <path d="some path here" fill={fill} />
  </svg>
);
