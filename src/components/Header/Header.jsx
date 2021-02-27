import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { AppBar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { MEDIA_QUERY_SM, MEDIA_QUERY_MD } from "../../constants/breakpoint";

const StyledAppBar = styled(AppBar)`
  border-bottom: 1px solid #dbdbdb;
  position: fixed;
  min-width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: 0.1s ease-in;

  ${MEDIA_QUERY_MD} {
  }
`;

const StyledContainer = styled(Container)``;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const StyledLink = styled(Button)`
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
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState(!state);
  };

  return (
    <>
      <HideOnScroll>
        <StyledAppBar color="secondary">
          <StyledContainer>
            <StyledToolbar component="nav" disableGutters>
              <Link color="textPrimary" variant="h5" href="/" underline="none">
                {siteTitle}
              </Link>

              <Hidden smUp>
                <IconButton onClick={toggleDrawer}>
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="left" open={state} onClose={toggleDrawer}>
                  {tabLinks &&
                    tabLinks.map((link) => (
                      <ListItem button key={link.title}>
                        <StyledLink color="primary" href={link.url}>
                          {link.title}
                        </StyledLink>
                      </ListItem>
                    ))}
                </Drawer>
              </Hidden>

              <Hidden xsDown>
                <Toolbar>
                  <List>
                    {tabLinks &&
                      tabLinks.map((link) => (
                        <StyledLink
                          color="primary"
                          key={link.title}
                          href={link.url}
                          $active={
                            link.url === "/"
                              ? location.pathname === link.url
                              : location.pathname.includes(link.url)
                          }
                        >
                          {link.title}
                        </StyledLink>
                      ))}
                  </List>
                </Toolbar>
              </Hidden>
            </StyledToolbar>
          </StyledContainer>
        </StyledAppBar>
      </HideOnScroll>
    </>
  );
}

export default Header;
