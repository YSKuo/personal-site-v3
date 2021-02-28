import React from "react";
import UserLinks from "../UserLinks/UserLinks";
import styled from "styled-components";
import {
  Container,
  Toolbar,
  Grid,
  Typography,
  Link,
  Divider,
} from "@material-ui/core";

import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
} from "../../constants/breakpoint";

const StyledContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;

  ${MEDIA_QUERY_SM} {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  ${MEDIA_QUERY_MD} {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

const PersonalInfoContainer = styled(Grid)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 1rem;

  ${MEDIA_QUERY_SM} {
    justify-content: flex-end;
    margin: 0;
  }
`;

const IconContainer = styled(Grid)`
  display: flex;
  justify-content: flex-start;

  ${MEDIA_QUERY_SM} {
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

function Footer({ config }) {
  const { siteTitle, userEmail, userResume, copyright } = config;

  return (
    <StyledContainer component="footer">
      <Grid container justify="space-between">
        <PersonalInfoContainer item xs={12} sm={6}>
          <Typography component="h2" variant="body2" color="inherit" noWrap>
            {siteTitle}
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
          <Typography component="h2" variant="body2" color="inherit">
            {copyright},
          </Typography>
          <Typography component="h2" variant="body2" color="inherit">
            <Typography component="span" variant="body2">
              Powered by{" "}
            </Typography>
            <Link href="https://www.gatsbyjs.com/" variant="inherit">
              Gatsby
            </Link>
            <Typography component="span" variant="body2">
              {" "}
              and{" "}
            </Typography>
            <Link
              href="https://github.com/Vagr9K/gatsby-advanced-starter"
              variant="inherit"
            >
              Gatsby Advanced Starter
            </Link>
            .
          </Typography>
        </SiteInfoContainer>
        <Grid item>
          <Typography
            component="h2"
            variant="body2"
            color="inherit"
            align="center"
            noWrap
          >
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

export default Footer;
