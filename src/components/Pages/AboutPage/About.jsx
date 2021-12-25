import React from "react";
import styled from "styled-components";
import { Container, Grid, Button, IconButton } from "@material-ui/core";
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

  const findUserLinks = (target) => {
    return userLinks.find(
      (item) => item.label.toLowerCase() === target.toLowerCase()
    );
  };

  const linkedinInfo = findUserLinks("linkedin");
  const instagramInfo = findUserLinks("instagram");

  return (
    <Container>
      <Section>
        <SectionTitle>About Me</SectionTitle>
        <P>
          Hi, there! I'm <B>{userName}</B>, a frontend developer and designer
          living in {userLocation}. After finishing my master's degree in
          mechanical engineering, I acquired extensive experience in a patent
          firm and also the high-tech manufacturing industry.
        </P>
        <P>
          Gaining a glimpse of user-centered methodologies from my experience in
          the manufacturing industry, I am eager to encourage interactions among
          people through digital products. Therefore, I've worked hard to
          improve my coding and design skills, which allow me to create websites
          that are intuitive and aesthetically balanced.
        </P>
        <P>
          In my spare time, I like to indulge myself in <B>music</B>, broaden my
          horizons with <B>travel</B>, document my journey by <B>photographs</B>
          , cultivate my taste in <B>denim</B> and <B>heritage menswear</B>, and
          feed my imagination of impossibilities with <B>video games</B> and{" "}
          <B>films</B>.
        </P>
        <P>
          You may also know more about me through my{" "}
          <B>
            <A href={linkedinInfo.url}>{linkedinInfo.label}</A>
          </B>{" "}
          or{" "}
          <B>
            {" "}
            <A href={instagramInfo.url}>{instagramInfo.label}</A>
          </B>
          .
        </P>
      </Section>
      <StyledDivider yMargin="2rem" />
      <Section>
        <SectionTitle>Skills</SectionTitle>
        <Grid container>
          {Object.entries(userSkills).map((keyValuePair, idx) => (
            <TagsSection key={idx} keyValuePair={keyValuePair} />
          ))}
        </Grid>
      </Section>
      <StyledDivider yMargin="2rem" />
      <Section>
        <SectionTitle>About this Website</SectionTitle>
        <P>
          I built this website with{" "}
          <A href="https://www.gatsbyjs.com/">Gatsby</A> and{" "}
          <A href="https://github.com/Vagr9K/gatsby-advanced-starter">
            Gatsby Advanced Starter
          </A>
          . If you want to know more about my configuration, you can visit the{" "}
          <B>
            <A href="https://github.com/YSKuo/personal-site-v3">Github repo</A>.
          </B>
        </P>
      </Section>
    </Container>
  );
}

export default About;

const Tags = styled(Grid)`
  padding-right: 0rem;
  margin-bottom: 2rem;

  ${mediaQueryBreakpoint("sm")} {
    padding-right: 1rem;
  }
`;

const TagContainer = styled(Grid)`
  padding: 0.25rem;
`;

const DummyButton = styled(Button)`
  text-transform: none;
`;

const Tag = ({ tag }) => {
  return (
    <TagContainer item>
      <DummyButton key={tag} variant="contained">
        {tag}
      </DummyButton>
    </TagContainer>
  );
};

const TagsSection = ({ keyValuePair }) => {
  const [type, list] = keyValuePair;
  let category = `${type.slice(0, 1).toUpperCase()}${type.slice(1)}`; // capitalize
  switch (type) {
    case "programmingLan":
      category = "Programming Languages";
      break;
    case "backend":
    case "frontend":
      category = `${category.slice(0, -3)}-${category.slice(-3)}`;
      break;
    default:
      break;
  }

  return (
    <Grid item xs={12} sm={6}>
      <SectionSubtitle>{category}</SectionSubtitle>
      <Tags container>
        {list.map((skill, idx) => (
          <Tag key={idx} tag={skill} />
        ))}
      </Tags>
    </Grid>
  );
};
