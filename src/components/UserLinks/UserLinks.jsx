import React from "react";
import "./UserLinks.css";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";

const iconMapTable = {
  Email: <EmailIcon />,
  Twitter: <TwitterIcon />,
  GitHub: <GitHubIcon />,
  Instagram: <InstagramIcon />,
  LinkedInIcon: <LinkedInIcon />,
};

function UserLinks({ config, labeled }) {
  function getLinkElements() {
    const { userLinks } = config;

    return userLinks.map((link) => (
      <Link color="secondary" href={link.url} key={link.label} target="_blank">
        {iconMapTable[link.label]}
      </Link>
    ));
  }

  const { userLinks } = config;
  if (!userLinks) {
    return null;
  }
  return <div>{getLinkElements()}</div>;
}

export default UserLinks;
