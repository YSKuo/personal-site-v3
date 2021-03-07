import React from "react";
import UserLinks from "../UserLinks/UserLinks";
import styled from "styled-components";
import { Container, Grid, Typography, Link, Divider } from "@material-ui/core";
import { mediaQueryBreakpoint } from "../../constants/breakpoint";

function Footer({ config }) {
  const { userName, userEmail, userResume, copyright } = config;

  return (
    <StyledContainer component="footer">
      <Grid container justify="space-between">
        <PersonalInfoContainer item xs={12} sm={6}>
          <Typography component="p" variant="h5" color="inherit" gutterBottom>
            {userName}
          </Typography>
          <Link href={`mailto:${userEmail}`}>{userEmail}</Link>
        </PersonalInfoContainer>
        <IconContainer item component="nav" xs={12} sm={6}>
          <UserLinks config={config} labeled />
        </IconContainer>
      </Grid>

      <StyledDivider />

      <Grid container justify="space-between">
        <SiteInfoContainer item>
          <Typography component="p" variant="body2" gutterBottom>
            {copyright}
          </Typography>
          <Typography component="p" variant="body2" color="inherit">
            Powered by <Link href="https://www.gatsbyjs.com/">Gatsby</Link> and{" "}
            <Link href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </Link>
            .
          </Typography>
        </SiteInfoContainer>
        <Grid item>
          <Typography component="p" variant="body2">
            Download{" "}
            <Link target="_blank" href={userResume}>
              Resume
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;

  ${mediaQueryBreakpoint("sm")} {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  ${mediaQueryBreakpoint("md")} {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

const PersonalInfoContainer = styled(Grid)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 1rem;

  ${mediaQueryBreakpoint("sm")} {
    justify-content: flex-end;
    margin: 0;
  }
`;

const IconContainer = styled(Grid)`
  display: flex;
  justify-content: flex-start;

  ${mediaQueryBreakpoint("sm")} {
    justify-content: flex-end;
  }
`;

const SiteInfoContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const StyledDivider = styled(Divider)`
  margin: 1rem 0;
`;

export default Footer;
