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
          Hi, there! I'm <B>{userName}</B>, a frontend designer and developer
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
          </B>{" "}
          .
        </P>
      </Section>
      <StyledDivider yMargin="2rem" />
      <Section>
        <SectionTitle>Skills</SectionTitle>
        <Grid container>
          <TagsSection userSkills={userSkills} category={"Design"} />
          <TagsSection userSkills={userSkills} category={"Development"} />
          <TagsSection userSkills={userSkills} category={"General"} />
        </Grid>
      </Section>
    </Container>
  );
}

const TagsSection = ({ category, userSkills }) => {
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

  const Tag = ({ tag }) => {
    const FakedButton = styled(Button)`
      text-transform: none;
    `;

    return (
      <TagContainer item>
        <FakedButton key={tag} variant="contained">
          {tag}
        </FakedButton>
      </TagContainer>
    );
  };

  return (
    <Grid item xs={12} sm={6}>
      <SectionSubtitle>{category}</SectionSubtitle>
      <Tags container disableGutters>
        {userSkills[category.toLowerCase()].map((item) => (
          <Tag tag={item} />
        ))}
      </Tags>
    </Grid>
  );
};

export default About;
