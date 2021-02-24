import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { AppBar } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { LinkOff } from "@material-ui/icons";

const HeaderContainer = styled.header`
  border-bottom: 1px solid #dbdbdb;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  background-color: ${(props) => props.theme.palette.primary.main};
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;

  & ~ & {
    margin-left: 1rem;
  }

  ${(props) =>
    props.$active &&
    `
    color: white;
  `}
`;

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return <Slide in={!trigger}>{children}</Slide>;
}

function Header({ config, theme }) {
  const { siteTitle, tabLinks } = config;

  return (
    <>
      <HideOnScroll>
        <AppBar>
          <HeaderContainer component="header">
            <StyledContainer disableGutters>
              <Link color="textPrimary" variant="h5" href="/" underline="none">
                {siteTitle}
              </Link>
              <Toolbar component="nav" disableGutters>
                {tabLinks &&
                  tabLinks.map((link) => (
                    <StyledLink
                      color="primary"
                      variant="inherit"
                      noWrap
                      key={link.title}
                      href={link.url}
                      $active={location.pathname === link.url}
                    >
                      {link.title}
                    </StyledLink>
                  ))}
              </Toolbar>
            </StyledContainer>
          </HeaderContainer>
        </AppBar>
      </HideOnScroll>
    </>
  );
}

export default Header;
