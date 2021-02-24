import React from "react";
import { Link as gatsbyLink } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "./Footer.css";

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

function Footer({ config }) {
  const { siteTitle, userEmail, userResume, copyright } = config;

  return (
    <Container component="footer" disableGutters>
      <StyledToolbar disableGutters>
        <Typography
          component="h2"
          variant="body2"
          color="inherit"
          align="center"
          noWrap
        >
          {siteTitle}
          <Link href={`mailto:${userEmail}`}>{userEmail}</Link>
        </Typography>
        <UserLinks config={config} labeled />
      </StyledToolbar>
      <StyledToolbar disableGutters>
        <Typography
          component="h2"
          variant="body2"
          color="inherit"
          align="center"
          noWrap
        >
          {copyright}
          <Typography component="span" variant="body2">
            , Powered by{" "}
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
      </StyledToolbar>
    </Container>
  );
}

export default Footer;
