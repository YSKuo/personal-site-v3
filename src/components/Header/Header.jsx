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

function Header({ config, theme }) {
  const { siteTitle, tabLinks } = config;
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <HideOnScroll>
        <StyledAppBar color="primary">
          <Container>
            <StyledToolbar component="nav" disableGutters>
              <SiteName
                color="textPrimary"
                variant="h5"
                href="/"
                underline="none"
              >
                {siteTitle}
              </SiteName>

              <Hidden smUp>
                <IconButton onClick={toggleDrawer}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={isDrawerOpen}
                  onClose={toggleDrawer}
                >
                  {tabLinks &&
                    tabLinks.map((link) => (
                      <ListItem button key={link.title}>
                        <Button
                          color={isTabActive(link) ? "secondary" : "default"}
                          variant={isTabActive(link) ? "contained" : "text"}
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
                          $active={isTabActive(link)}
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

const SiteName = styled(Link)`
  color: ${(props) => props.theme.palette.common.white};
`;

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

  color: ${({ theme, $active }) =>
    $active ? theme.palette.common.white : theme.palette.secondary.main};
`;

export default Header;
