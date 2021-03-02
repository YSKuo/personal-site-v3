import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Button,
  Link,
  Slide,
  useScrollTrigger,
  IconButton,
  Hidden,
  List,
  ListItem,
  Drawer,
  Container,
  Toolbar,
} from "@material-ui/core";
import { mediaQueryBreakpoint } from "../../constants/breakpoint";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return <Slide in={!trigger}>{children}</Slide>;
}

function isTabActive(link) {
  if (globalThis?.location) {
    return link.url === "/"
      ? globalThis.location.pathname === link.url
      : globalThis.location.pathname.includes(link.url);
  }
  return false;
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
        <StyledAppBar color="primary">
          <Container>
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
                        <Button
                          color={isTabActive(link) ? "secondary" : "default"}
                          variant={isTabActive(link) ? "contained" : "default"}
                          href={link.url}
                        >
                          {link.title}
                        </Button>
                      </ListItem>
                    ))}
                </Drawer>
              </Hidden>

              <Hidden xsDown>
                <Toolbar disableGutters>
                  <List>
                    {tabLinks &&
                      tabLinks.map((link) => (
                        <NavLink
                          isTabActive={isTabActive(link)}
                          key={link.title}
                          href={link.url}
                        >
                          {link.title}
                        </NavLink>
                      ))}
                  </List>
                </Toolbar>
              </Hidden>
            </StyledToolbar>
          </Container>
        </StyledAppBar>
      </HideOnScroll>
    </>
  );
}

const StyledAppBar = styled(AppBar)`
  border-bottom: 1px solid #dbdbdb;
  position: fixed;
  min-width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: 0.1s ease-in;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const NavLink = styled(Button)`
  font-size: 1.2rem;
  text-transform: none;

  & ~ & {
    margin-left: 1rem;
  }

  color: ${({ theme, isTabActive }) =>
    isTabActive && theme.palette.common.white};
`;

export default Header;
